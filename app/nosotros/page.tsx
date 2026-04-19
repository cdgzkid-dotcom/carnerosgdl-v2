import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Prose } from "@/components/shared/Prose";
import { StatsCounter } from "@/components/home/StatsCounter";
import { HERO_IMAGES } from "@/lib/categories";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Historia, misión y visión de Carneros Football Club. Fundado en 1985 en Zapopan, referente del football americano juvenil en Guadalajara.",
};

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        title="Nosotros"
        subtitle="Historia, misión y visión de Carneros Football Club — un referente del football juvenil en Guadalajara desde 1985."
        image={HERO_IMAGES.nosotros}
        imageAlt="Equipo Carneros Football Club posando en el campo"
        height="md"
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Prose>
            <p>
              A medida que Carneros Football Club continúa desarrollándose y creciendo
              exponencialmente, también lo hace su influencia en el football juvenil de la región,
              especialmente a través de sus programas de football americano y tocho bandera.{" "}
              <strong>Fundado en 1985 en Guadalajara</strong>, Carneros ha crecido desde una
              categoría pequeña hasta convertirse en uno de los clubes más reconocidos de la ciudad.
              A lo largo de los años, el club ha logrado numerosos <strong>campeonatos</strong> y{" "}
              <strong>subcampeonatos</strong> en diversas categorías, consolidándose como un
              referente del football juvenil en la región. Estos logros son el resultado del trabajo
              arduo, el compromiso de los jugadores y la dedicación de su cuerpo técnico. Hoy en
              día, Carneros es un pilar en la formación de jugadores desde los 9 hasta los 18 años,
              promoviendo valores como la disciplina, el trabajo en equipo y el liderazgo.
            </p>
          </Prose>
        </div>
      </section>

      <section className="bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Prose>
            <h2>Misión</h2>
            <p>
              Carneros Football Club tiene como misión{" "}
              <strong>formar atletas completos y ciudadanos responsables</strong>, utilizando el
              football americano y flag como herramientas para el desarrollo integral de los
              jóvenes. Nos enfocamos en inculcar valores fundamentales como la disciplina, el
              trabajo en equipo, el esfuerzo, el respeto y la perseverancia, con el objetivo de que
              cada uno de nuestros jugadores no solo alcance su máximo potencial deportivo, sino
              también personal. Nuestro club busca ser un espacio donde los jóvenes puedan
              desarrollarse física y mentalmente, forjando una ética de trabajo sólida que les
              permita enfrentar los desafíos dentro y fuera del campo. A través de la participación
              activa en competencias de alto nivel, promovemos el liderazgo, la responsabilidad
              social y el compromiso con la comunidad.
            </p>
          </Prose>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Prose>
            <h2>Visión</h2>
            <p>
              Nuestra visión es{" "}
              <strong>
                convertirnos en el club de football americano y flag más destacado de la región
              </strong>
              , no solo por los éxitos deportivos que logramos, sino también por el impacto positivo
              que generamos en la vida de nuestros jugadores, sus familias y la comunidad en
              general. Aspiramos a ser un referente de excelencia en la formación de jóvenes
              atletas, brindándoles las herramientas necesarias para alcanzar metas académicas,
              deportivas y profesionales. Queremos ser reconocidos por nuestra capacidad de formar
              jugadores que trasciendan en el deporte y en la sociedad, utilizando las oportunidades
              deportivas como un puente hacia el acceso a becas y programas de alto rendimiento
              tanto a nivel nacional como internacional. Además, buscamos expandir nuestra
              influencia a nivel regional, inspirando a más jóvenes a unirse al deporte y
              desarrollarse en un ambiente de respeto y camaradería.
            </p>
            <p>
              Con un enfoque en el <strong>desarrollo integral</strong>, Carneros Football Club se
              compromete a seguir creciendo y evolucionando, siempre manteniendo su esencia como una
              organización comprometida con el bienestar y éxito de cada uno de sus miembros, y con
              un fuerte compromiso con la comunidad.
            </p>
          </Prose>
        </div>
      </section>

      <section className="bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Prose>
            <h2>Historia</h2>
            <p>
              Guadalajara tiene una tradición en football americano muy arraigada que se remonta a
              más de 30 años de historia. Carneros es un equipo que, pese a las adversidades, ha
              sabido mantenerse y estar vigente entre los niños y jóvenes que, por una razón u otra,
              se aficionan a un deporte que no tiene un gran arrastre, pero que en nuestra ciudad ha
              sabido encontrar su nicho.{" "}
              <strong>
                Carneros Football Club fue fundado en el año de 1985 en el municipio de Zapopan
              </strong>
              , y desde entonces, de manera ininterrumpida, ha estado presente en diversos torneos
              dentro de seis categorías que van desde los seis hasta los 18 años.
            </p>
          </Prose>
        </div>
      </section>

      <StatsCounter />

      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Prose>
            <h2>Logros</h2>
            <p>
              En total, la organización Carneros ha logrado <strong>57 campeonatos</strong>,{" "}
              <strong>43 subcampeonatos</strong> y <strong>65 terceros lugares</strong> en
              diferentes categorías durante su destacada trayectoria de <strong>39 años</strong>.
              ¡Un logro notable que refleja su compromiso y éxito en el mundo del football
              americano!
            </p>
            <p>
              Estos logros son aún más destacables al ser una iniciativa social sin presupuesto
              fijo, en la cual los directivos, entrenadores, comisionados, managers y coaches
              trabajan sin recibir un salario por la prestación de sus servicios. Todo esto se debe
              al amor por el deporte de las tacleadas.
            </p>
          </Prose>
        </div>
      </section>

      <section className="bg-secondary py-16 text-secondary-foreground md:py-20">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Prose className="prose-invert prose-headings:text-secondary-foreground prose-p:text-secondary-foreground/80 prose-strong:text-accent">
            <h2>¿Qué es FADEMAC?</h2>
            <p>
              FADEMAC significa <strong>Fútbol Americano del Estado de México</strong>, una de las
              ligas más reconocidas en México, dedicada a promover y organizar competencias de
              football americano en diferentes categorías. Estar en la{" "}
              <strong>División 1 de FADEMAC</strong> significa que Carneros compite al más alto
              nivel en la liga, enfrentándose a equipos de gran tradición y talento en el país. La
              liga es conocida por su alto nivel de competencia y por contribuir al desarrollo del
              football americano en México, brindando una plataforma sólida para jóvenes atletas que
              aspiran a llegar a niveles profesionales.
            </p>
          </Prose>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Prose>
            <h2>¿Qué ofrece Carneros Football Club?</h2>
            <p>
              Carneros Football Club proporciona programas de entrenamiento estructurados tanto en{" "}
              <strong>football americano</strong> como en <strong>tocho bandera</strong>,
              organizados por categorías de edades para asegurar un desarrollo adecuado de
              habilidades. El club divide a sus atletas en categorías como Rabbits (9-10 años),
              Hornets (11 años), Irons (12 años), Falcons (13 años), Tauros (14 años), Ponys (15-16
              años) y <strong>Juvenil Única</strong> (15-18 años). Esta división permite que los
              jugadores entrenen y compitan con compañeros en etapas de desarrollo similares,
              promoviendo el crecimiento tanto físico como táctico. Además del entrenamiento
              deportivo, Carneros fomenta un fuerte sentido de comunidad y deportividad mediante la
              colaboración entre jugadores, padres y entrenadores, contribuyendo a un ambiente donde
              el desarrollo personal y atlético van de la mano.
            </p>
            <p>
              Más allá del enfoque en los fundamentos del football, Carneros da gran importancia al
              desarrollo del carácter. El cuerpo técnico, compuesto en su mayoría por exjugadores,
              proporciona mentoría y orientación, ayudando a moldear a los jóvenes atletas como
              individuos integrales. El club también colabora con instituciones educativas y
              organizaciones locales, reforzando la importancia del logro académico junto con el
              éxito deportivo.
            </p>
          </Prose>
        </div>
      </section>

      <section className="bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Prose>
            <h2>Football Americano y Tocho Bandera en Carneros</h2>
            <p>
              Tanto el football americano como el tocho bandera son partes esenciales de la oferta
              de Carneros, cada uno con beneficios únicos para los atletas. El{" "}
              <strong>football americano</strong>, la versión más tradicional y física del club, se
              enfoca en desarrollar fuerza, disciplina e inteligencia táctica. Por otro lado, el{" "}
              <strong>tocho bandera</strong> destaca por la agilidad, velocidad y el pensamiento
              estratégico sin contacto físico, lo que lo convierte en un punto de entrada ideal para
              los jugadores más jóvenes o aquellos que prefieren una versión del juego sin contacto.
            </p>
            <p>
              El enfoque de Carneros en el football es inclusivo y orientado al desarrollo. Cada
              categoría cuenta con entrenadores dedicados que garantizan que todos los jugadores,
              independientemente de su nivel de habilidad, reciban la atención y el apoyo necesarios
              para mejorar. Este enfoque ayuda a que los jugadores avancen a través de los
              diferentes niveles de competencia, al tiempo que cultivan un amor duradero por el
              deporte.
            </p>
          </Prose>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Prose>
            <h2>El Crecimiento e Impacto de Carneros Football Club</h2>
            <p>
              Conforme el club continúa expandiéndose, Carneros ha hecho contribuciones
              significativas a la comunidad local, no solo a través de sus programas de football,
              sino también al nutrir valores como el trabajo en equipo, la resiliencia y el
              liderazgo. El éxito del club se refleja en los logros de sus atletas, muchos de los
              cuales han representado niveles más altos de competencia. Además, varios jugadores han
              sido becados para la universidad en distintas oportunidades a lo largo del país,
              reflejando el impacto que Carneros tiene en la vida de sus jugadores. Carneros también
              desempeña un papel clave en el desarrollo de la cultura del football en la región,
              promoviendo el deporte y brindando acceso a entrenamientos y recursos de calidad para
              los jóvenes atletas.
            </p>
            <p>
              La demanda de participación tanto en football americano como en tocho bandera ha
              aumentado constantemente, y con el apoyo de patrocinadores, alianzas locales y
              familias dedicadas, Carneros está listo para seguir creciendo como una institución
              líder en deportes juveniles. El futuro es prometedor, ya que el club continúa
              brindando plataformas para que los jóvenes atletas prosperen, tanto en el campo como
              en la vida.
            </p>
          </Prose>
        </div>
      </section>
    </>
  );
}
