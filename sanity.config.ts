import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
    projectId: "8gqgneak",
    dataset:"production",
    title:'devLink',
    apiVersion:'2023-09-24',
    basePath:"/admin",
    plugins:[deskTool()],
})

export default config;
