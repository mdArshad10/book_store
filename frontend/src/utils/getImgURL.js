export const getImageUrl = (name)=>{
    return new URL(`/src/assets/books/${name}`, import.meta.env.VITE_BASIC_URL);
}