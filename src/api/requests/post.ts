import { postSchemes } from "../schemes";

import service from "../service";

export async function getPosts(){
    return service.get<never, unknown>(`/articles`)
}