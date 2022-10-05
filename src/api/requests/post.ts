import { postSchemas } from "../schemes";

import service from "../service";

export async function getPosts(params: postSchemas.PostRequest){
    const { limit, page } = params;
    const paramsStrings = (limit && page) ? `?_page=${page}&_limit=${limit}` : 
                            (!limit && page) ? `?_page=${page}` : 
                            (limit && !page )? `?_limit=${limit}` : "";
    
    return service.get<never, postSchemas.PostResponse>(`/articles${paramsStrings}`);
}