export const getImageUrl = (name)=>{
    return new URL(`/src/assets/books/${name}`, "http://localhost:5173");
}