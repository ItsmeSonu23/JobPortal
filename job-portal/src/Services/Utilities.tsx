export const formatDate = (dateString:string)=>{
    const date = new Date(dateString)
    const options = {years:'numeric' as const, month:'short' as const}
    return date.toLocaleString('en-US',options)
}