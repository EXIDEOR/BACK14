function generateRoleValidator(roles) {
    return (rol) => {
        if (roles.includes(rol)) {
            console.log('pasa')
        }else {
            console.log('no pasa')
        }
    }
}

function onlyAdmn(rol) {
    if (roles.includes(rol)) {
        console.log('pasa')
    }else {
        console.log('no pasa')
    }
}

const onlyAdmn = generateRoleValidator(['admin'])

const onlyUserAndAdmin = generateRoleValidator(['admin', 'user'])


onlyAdmn('colado')
onlyAdmn('admin')

const users = [
    {
        name: 'pepe',
        rol: 'consciencia'
    },
    {
        name: 'dory',
        rol: 'guia'
    },
    {
        name: 'sully',
        rol: 'asustador'
    }
]

const roles = users.map(users => users.rol)

const usuariosValidos = ['consciencia', 'guia', 'asustador']
const validateUsers = generateValidator(validateUsers)

const validateProds = ['tazos', 'hielocos', 'olocoons']
const validateProds = generateValidator(validateProduct)