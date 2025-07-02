import { Injectable } from "@nestjs/common";
import { Debug } from "generated/prisma/runtime/library";
import { CreateSubaccountDto } from "src/asaas/dto/create.subaccount.dto";

@Injectable()
export class AsaasService {
  private readonly apiKey = process.env.ASAAS_API_KEY!;
  private readonly url = process.env.ASAAS_API_SUBACCOUNT_URL!;

  async createSubaccount(data: CreateSubaccountDto) {
    const response = await fetch(this.url, {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            access_token: this.apiKey,
        },
        //body: JSON.stringify(data),
    });
    
    Debug.log('URL:', this.url);
    Debug.log('Response:', response.toString());
    Debug.log('Response Body:', response.body!.values.toString());
    Debug.log('Response Text:', response.text().toString());
    Debug.log('Response JSON:', await response.json().then(aa => aa.toString()));
    
    const text = await response.text();

    try {
        
        const json = JSON.parse(text);

        if (!response.ok) {
            // console.error('Erro ao criar subconta ASAAS:', json);
            // throw new Error(json?.errors?.[0]?.description || 'Erro desconhecido no ASAAS'); 
            throw new Error('Erro desconhecido no ASAAS'); 
        }

        return json;
    } catch (e) {   
        // console.error('Resposta do ASAAS não é JSON. Body recebido:\n', text); 
        throw new Error('Erro ao converter resposta do ASAAS para JSON');
  }
}

}
