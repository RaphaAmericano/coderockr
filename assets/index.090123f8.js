import{A as w,B as l,C as P,D as q,b as y,j as h,a as e,T as u,E as j}from"./index.47c5d570.js";import{b as v}from"./post.eab42a61.js";const C="_content_1qpxj_1",I="_closeContent_1qpxj_6",S="_photo_1qpxj_14",T="_heading_1qpxj_24",d={content:C,closeContent:I,photo:S,heading:T},A="/coderockr/assets/new_post_photo_placeholder.de782b2b.png",E="_form_n0qqm_1",L={form:E},$="/coderockr/assets/pencil_icon.7d977dca.svg",k={title:"",author:"",imageUrl:"",post:""},R=w({title:l().required("Fill the title"),author:l().required("Fill the author name"),imageUrl:l().required("Fill the image URL"),post:l().required("Fill the post")});function V(){const{formState:s,...n}=P({defaultValues:k,resolver:q(R)});return{errors:s.errors,touchedFields:s.touchedFields,...n}}function B(s){const{updateImageFn:n}=s,p=V(),g=v(),{isLoading:a,isSuccess:F}=g,{errors:t,touchedFields:o,register:c,reset:x,setValue:G,watch:_}=p;y.exports.useEffect(()=>{const r=_((i,{name:m,type:J})=>{const{imageUrl:f}=i;m==="imageUrl"&&f!==void 0&&n(f)});return()=>r.unsubscribe()},[_]);async function N(r){console.log(r);try{const i=await g.mutateAsync(r);F&&x()}catch(i){const{status:m}=i;console.log(m)}}function U(r){console.log(r)}return h("form",{className:L.form,onSubmit:p.handleSubmit(N,U),children:[e(u,{disabled:a,name:"title",label:"Title",type:"text",error:t.title,touched:o.title,register:{...c("title")},placeholder:t.title&&o.title?t.title.message:""}),e(u,{disabled:a,name:"author",label:"Author",type:"text",error:t.author,touched:o.author,register:{...c("author")},placeholder:t.author&&o.author?t.author.message:""}),e(u,{disabled:a,name:"imageUrl",label:"Image URL",type:"text",error:t.imageUrl,touched:o.imageUrl,register:{...c("imageUrl")},placeholder:t.imageUrl&&o.imageUrl?t.imageUrl.message:""}),e(j,{disabled:a,rows:11,name:"post",label:"Post",error:t.post,touched:o.post,register:{...c("post")},placeholder:t.post&&o.post?t.post.message:"Hello..."}),h("button",{type:"submit",children:[e("img",{src:$}),"Create Post"]})]})}function D(){function s(n){console.log(n)}return h("div",{className:d.content,children:[e("div",{className:d.photo,children:e("img",{src:A})}),e("div",{className:d.heading,children:e("h3",{children:"New Post"})}),e("div",{children:e(B,{updateImageFn:s})})]})}const H="_main_3roo6_1",z="_container_3roo6_13",b={main:H,container:z};function O(){return e("main",{className:b.main,children:e("section",{className:b.container,children:e(D,{})})})}export{O as default};
