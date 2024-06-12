export const slugify = str => {
    if(str)return str.toLowerCase().replaceAll(' ', '-')
    return null
}