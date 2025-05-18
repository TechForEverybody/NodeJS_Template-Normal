import environment_variables from "../../node.config";

console.log('process.env.NODE_ENV', environment_variables.NODE_ENV)

const server_configurations = {
    serverPort: parseInt(environment_variables.PORT || '8080') || 8080,
    serverHost: environment_variables.HOST || 'localhost',
    secretKey: environment_variables.SECRET_KEY || 'TechForEverybody',
    mongodbURL: environment_variables.MONGODB_URL || '',

}
console.log(__dirname, 'server_configurations', server_configurations)

export default server_configurations
