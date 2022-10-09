import { useQuery } from "react-query";
import { imageRequest } from "../../api/requests";
import { imageSchemas } from "../../api/schemes";

export function useGetImage(params: imageSchemas.GetImageRequestParams){
    async function requestFn(){
        return imageRequest.getImage(params!);
    }

    const query = useQuery<imageSchemas.GetImageResponse, unknown>(["get-image", params], requestFn, {
        enabled: Boolean(params),
        staleTime: 4000,
    });
    
    return query;
}