class empresa
{
    constructor()
    {
        this.id = 0
        this.nombre = ""
        this.nit =  0
        this.tEmprea =""
        this.empleados = []
        this.genero = []
        this.edades = []
        this.esCabezaHogar = []
        this.nomina = []        
    }

    crear_datos_iniciales()
    {
        let nombre = prompt("ingrese el nombre de la empresa: ")
        console.log("El nit es es un numero de 10 digitos")
        let nit = prompt("ingrese el nit de la empresa: ")
        if(nombre === null || nit === null || nit.length < 9)
        {
            console.log("Datos incorrectos, verifica el formato e ingresalos de nuevo")
            crear_datos_iniciales()
        }
        else
        {
          this.nombre = nombre
          this.nit = nit   
        }

    }

    ingresarEmpleado()
    {
        this.id += 1
        let nombre = prompt("ingrese el nombre del empleado")
        console.log("Ingrese el genero del empleado en el siguiente formato = ")
        console.log("F para Femenino  M Masculino  O para otros")
        let genero = prompt("ingrese el genero del empleado en formato: ")
        let cabezaEdad = prompt("ingrese SI/NO si es cabeza de hogar")   
        let edad = parseInt(prompt("ingrese la edad :"))  
        this.edades.push(edad)   
        this.empleados.push(nombre)
        this.genero.push(genero.toUpperCase())
        if(cabezaEdad.toUpperCase() == "SI" || cabezaEdad.toUpperCase() == "S" )
        {
            this.esCabezaHogar.push("SI")
        }
        if(cabezaEdad.toUpperCase() == "NO" || cabezaEdad.toUpperCase() == "N" )
        {
            this.esCabezaHogar.push("NO")
        }
    }

    mujeres()
    {
       let mujeresEmpresa = [] 
        for(let x = 0; x < this.genero.length; x++)
        {
            if(this.genero[x] == "F")
            {
                mujeresEmpresa.push(this.empleados[x])               
            }       
        }
        console.log("Mujeres en la empresa: ")
        console.log(mujeresEmpresa)
    }

    hombres()
    {
        this.hombresEmpresa = [] 
        for(let x = 0; x < this.genero.length; x++)
        {
            if(this.genero[x] === "M")
            {
                this.hombresEmpresa.push(this.empleados[x])               
            }       
        }
        console.log("Hombres en la empresa: ")
        console.log(this.hombresEmpresa)
    }

    generarNomina()
    {
        let sueldoBase = 908526
        let bonificacion = 0
        let porcentaje = 0
        let nominaTotal = sueldoBase + bonificacion + porcentaje
        for(let x = 0; x < this.genero.length; x++)
        {
            if(this.edades[x] <= 30 && this.edades[x] >= 20)
            {
                bonificacion = 200000               

            }

            if(this.edades[x] > 30 && this.edades[x] <= 40)
            {
                bonificacion = 400000               

            }

            if(this.edades[x] > 40 && this.edades[x] <= 50)
            {
                bonificacion = 500000               

            }

            if(this.edades[x] > 50 && this.edades[x] <= 60)
            {
                bonificacion = 600000               

            }
            if(this.edades[x] > 60)
            {
                bonificacion = 700000               

            }
            if(this.esCabezaHogar[x] == "SI")
            {
                porcentaje += (sueldoBase*0.3)
            }
            if(this.genero[x] == "F")
            {
                porcentaje += (sueldoBase*0.1)
            }
            this.nomina.push(nominaTotal)

        }

    }

    totalNomina()
    {
        let totalNom = 0
        for(let x = 0; x < this.nomina.length; x++)
        {
            totalNom += this.nomina[x]
        }
        console.log("El total de la nomina es:")
        console.log(totalNom)
    }

    generar_tipo_empresa()
    {
        let digito1 = this.nit[6]
        let digito2 = this.nit[7]
        let digito3 = this.nit[8]
        let digito4 = this.nit[9]
        let digitosFinales = parseInt(this.nit[6] + this.nit[7] + this.nit[8] + this.nit[9])
        let suma = digito1+digito2+digito3+digito4
        if (suma % 7 === 0)
        {
            this.tEmprea = "Sociedad por Acciones Simplificadas (S.A.S.)"
        }
        if (suma % 5 === 0)
        {
            this.tEmprea = "Sociedad Anónima (S.A.) "

        }
        if (suma % 3 === 0)
        {
            this.tEmprea = "Sociedades Limitadas (LTDA) "

        }
        if (suma % 2 === 0)
        {
            this.tEmprea = "Sociedad Comandita por Acciones (S. C. A.)"
        }

        console.log("El tipo de empresa es:")
        console.log(this.tEmprea)
        console.log("Los 4 digitos son:")
        console.log(digitosFinales)
    }

    liquidar(nombre_trabajador)
    {
       let posicion = this.empleados.indexOf(nombre_trabajador)
       let cabezaHo = ""
       if(this.esCabezaHogar[posicion] == "SI")
       {
           cabezaHo = "Cabeza de hogar"
       }
       if(this.esCabezaHogar[posicion] == "NO")
       {
           cabezaHo = "No es Cabeza de hogar"
       }
       console.log(`El trabajador ${this.empleados[posicion]} ${this.genero[posicion]} ${cabezaHo}
       se liquida de la empresa ${this.nombre} con Nit ${this.nit} 
       con un saldo a favor de ${(this.nomina[posicion]*3)}`)

    }
}

let empresa1 = new empresa()
empresa1.crear_datos_iniciales()
empresa1.ingresarEmpleado()
empresa1.ingresarEmpleado()
empresa1.mujeres()
empresa1.hombres()
empresa1.generarNomina()
empresa1.totalNomina()
empresa1.generar_tipo_empresa()
empresa1.liquidar("eilyn")
