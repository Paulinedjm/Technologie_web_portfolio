function MyFirstComponent (){
    return (
        <p className="text-2xl text-red-900">Ceci est mon premier composant</p>
    )
}

function Hello(props: {name:string}) {
    return (
        <p>Bonjour {props.name}</p>
    )
}

function Card(props: {children: React.ReactNode}){
    return(
         <div className="bg-blue-100 rounded-xl shadow p-4 container mx-auto">
            {props.children}
        </div>
    )
}

export default function MyFirstPage() {
    return (
        <div className="bg-blue-50 rounded-xl shadow p-4 container mx-auto">
            <p>Ceci est ma première page</p>
            <p>Un autre paragraphe</p>
            < MyFirstComponent />
            <Hello name="Nicolas" />
            <Card>
                {/* Contenu de la carte */}
                <p>Enfant</p>
                <p>je suis dans la carte</p>
            </Card>
        </div>

    )
}