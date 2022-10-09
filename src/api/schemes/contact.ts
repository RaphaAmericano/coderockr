export interface Contact {
    name: string;
    email: string;
    phone: string;
    post: string;
}

export interface ContactPostRequestParams extends Contact{

}

export interface PostNewContactResponse {
    args: object;
    data: string;
    files: object;
    form: object;
    json: Contact;
}
