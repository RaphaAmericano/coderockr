import { contactSchemas } from "../schemes";

import { testApiService } from "../service";

export async function postContact(params: contactSchemas.ContactPostRequestParams){
    return testApiService.post<never, contactSchemas.PostNewContactResponse>("/post", { ...params });
}