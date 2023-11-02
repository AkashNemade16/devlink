import supabase from "@/utils/supabaseClient";

export const uploadImage = async (file:File) => {
    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const {data,error} = await supabase.storage.from("UserProfiles").upload(fileName,file);
    if(error) throw error;
    console.log(data);
    return data
}