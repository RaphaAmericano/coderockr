import { useMutation } from "react-query";
import { contactRequest } from "../../api/requests";
import { contactSchemas } from "../../api/schemes";

export function usePostContact() {
  const mutation = useMutation<
    contactSchemas.PostNewContactResponse,
    unknown,
    contactSchemas.ContactPostRequestParams
  >(contactRequest.postContact);
  return mutation;
}
