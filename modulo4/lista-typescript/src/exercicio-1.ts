const returnNameAndBirthday = (name: string, date: string): string => {
    const writtenDate: string[] = date.split("/");
    let month: string = ""
    if (writtenDate[1] === "01") {
        month = "Janeiro"
    } else if (writtenDate[1] === "02") {
        month = "Fevereiro"
    }else if (writtenDate[1] === "03") {
        month = "Março"
    }else if (writtenDate[1] === "04") {
        month = "Abril"
    }else if (writtenDate[1] === "05") {
        month = "Maio"
    }else if (writtenDate[1] === "06") {
        month = "Junho"
    }else if (writtenDate[1] === "07") {
        month = "Julho"
    }else if (writtenDate[1] === "08") {
        month = "Agosto"
    } else if (writtenDate[1] == "09") {
        month = "Setembro"
    } else if (writtenDate[1] === "10") {
        month = "Outubro"
    } else if (writtenDate[1] === "11") {
        month = "Novembro"
    } else if (writtenDate[1] === "12") {
        month = "Dezembro"
    }

    return `Olá, me chamo ${name}, nasci no dia ${writtenDate[0]} do mês de ${month} do ano de ${writtenDate[2]}`
}

console.log(returnNameAndBirthday("gabriela", "16/09/1996"))