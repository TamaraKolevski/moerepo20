
const persons = [
{
    maticen: 1,
    ime: "Stavre",
    godini: 20
},
{
    maticen: 2,
    ime: "Pero",
    godini: 32
},
{
    maticen: 3,
    ime: "Mitre",
    godini: 44
},
{
    maticen: 4,
    ime: "Ane",
    godini: 35
}
]

const PersonIterator = () => {

    return persons.map( person => {
        return <li key={person.maticen}>{'${person.ime} : ${person.godini}'}</li>
    })

}

export default PersonIterator