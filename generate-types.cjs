// 生成类型声明文件的入口文件
const fs = require("fs")
const path = require("path")

// 定义组件和类型文件的目录路径
const componentsDir = path.resolve(__dirname, "dist", "components", "packages", "components")

// 类型声明入口文件的位置
const typesFile = path.resolve(__dirname, "dist", "components", "types.d.ts")

// 获取组件目录下面的所有子目录
const components = fs.readdirSync(componentsDir)

// 定义最终写入到types.d.ts文件中的内容
let typesContent = "import { Plugin } from 'vue';\n\n"
typesContent += "declare const kot:Plugin;\n"
typesContent += "export default kot;\n"

console.log(components)
// 为每个组件的类型的生命文件生成一个export语句
// 并且添加到typesContent里面
typesContent += components.map(component => `export * from '/packages/components/${component}';`).join("\n")

// 写入types.d.ts
fs.writeFileSync(typesFile, typesContent)
