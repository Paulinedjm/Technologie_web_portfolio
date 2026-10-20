function Section(props: {title:string, children:React.ReactNode}) {
    return (
    <div className=" bg-blue-100 rounded-xl shadow p-4 container mx-auto">
        <h2 className="font-bold text-gray-950 text-xl">{props.title}</h2>
        {props.children}
    </div>
    )
}

function Section_Item(props: {subtitle: string, period?: string, description?: string, children?:React.ReactNode}) {
    return(
        <div>
            <h3 className="font-bold text-gray-900 ">{props.subtitle}</h3>
            <span className="text-sm text-gray-700 font-medium">{props.period}</span>
            
            <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                {props.description}
            </p> 
            {props.children}
        </div>
    )
}

function List(props: { items: string[] }) {
    return (
        <ul className="list-disc list-inside text-sm text-gray-700 mt-1 space-y-1">
            {props.items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

export default function CVentry() {
    return(
    <div className="bg-blue-50 rounded-xl shadow p-4 container mx-auto">

        <Section title="Pauline de Jamblinne">
          <span> pauline@example.com</span>
          <span> +32 4XX XX XX XX</span>
          <span> Bruxelles, Belgique</span>
        </Section>

      <Section title = "Education">
        <Section_Item subtitle="ECAM" period="2024-..."  />
        <Section_Item subtitle="VF" period ="2021-2024" description ="Immersion, Science 6h, Maths 4h" />
        <Section_Item subtitle="HHC" period="2018-2021" />
      </Section>

      <Section title="Expérience professionelle">
        <Section_Item subtitle="Creacorneur" period="2025-..." description="vendeuse" />
        <Section_Item subtitle="LJE" period="2022-2023" description="Création d'une mini-entreprise pendant 1 an avec des camarades
        de classe, departement financier" />
      </Section>

      <Section title="Compétences">
        <Section_Item subtitle="Language de programmation">
        <List items={["Python","HTML","C"]} />
        </Section_Item>

        <Section_Item subtitle="Langue">
        <List items={["Français","Anglais","Néerlandais"]} />
        </Section_Item>
      </Section>

    </div>
    )
}