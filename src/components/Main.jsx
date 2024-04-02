import { useState } from "react"

export default function Main () {
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [listaContatos, setContatos] = useState([""]);
    const [idade, setIdade] = useState([""]);

    const registrar = (event) => {
        event.preventDefault();
        alert("Deu certo!")
        setListaContatos([...listaContatos,
    {
    nomeSalvo: nome,
    telefoneSalvo: telefone,
    idadeSalvo: idade, 
}
]);
    }
    console.table(listaContatos);


    return(

        <main>
            <form>
                <label> 
                Nome:<input 
                type="text" 
                name="nome-contato"
                id="nome"
                value={nome}
                onChange={(event) => setNome(event.target.value)}/> 
                </label>
                <label>
                Telefone:<input 
                type="tel" 
                name="telefone-contato"
                id="telefone"
                value={telefone}
                onChange={(event) => setTelefone(event.target.value)}/> 
                </label>
                <label>
                Idade: <input
                type="number"
                name="idade-contato"
                id="idade"
                value={idade}
                onChange={(event) => setIdade(event.target.value)}/> 
                </label>
                <button>ENVIAR</button>
            </form>
        </main>
    )
}

