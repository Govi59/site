<template lang="html">
<div>
  <navbar class="rel"></navbar>
  <div id="spectacle__hero">
    <video id="spectacle__hero_bg" poster="/images/timelapse-zikos-danse_poster.jpg" autoplay loop>
      <!-- <source src="/videos/timelapse-zikos.webm" type="video/webm"> -->
      <source src="/videos/timelapse-zikos-danse.mp4" type="video/mp4">
    </video>
  </div>

  <section id="spectacle__presentation">
    <h2>Le spectacle 2018 est en pleine préparation ! Suivez son avancée sur</h2>
    <h2><a class="inline-link" target="_blank" href="https://www.facebook.com/commuzlyon">Facebook</a> ou <a class="inline-link" target="_blank" href="https://www.instagram.com/commuzlyon/">Instagram</a></h2>
  </section>

  <div id="precedentes">
    <h2>Éditions précédentes</h2>
    <p>Déjà plus de 16 ans de représentations, de 2002 à 2018 !</p>
    <p>D'après la légende, la Commuz' existait déjà avant 2002... Nos plus grands détectives sont perdus dans la salle des archives, nous vous tenons au courant s'ils parviennent à en sortir !</p>
    <!-- <a class="inline-link" v-for="(annee, id) in anneesPassees" :key="id" :href="'#' + annee.annee">{{ annee.annee }}</a> -->
  </div>
  <pane v-for="(annee, id) in anneesPassees" :key="id" :id="annee.annee" :type="'pane--media'" :bgImage="annee.bgImage" :image="annee.image" :text="annee.text">
    <template scope="props">
      <div v-if="annee.gallerie || annee.equipe" class="annee__links">
        <div v-if="annee.gallerie" class="button-link">
          <router-link class="" :to="`/galerie/${annee.annee}`"><img src="/icons/gallerie.svg" alt="">Voir les photos</router-link>
        </div>
        <div v-if="annee.equipe" class="button-link">
          <router-link class="" :to="`/equipe/${annee.annee}`"><img src="/icons/equipe.svg" alt="">Voir l'équipe</router-link>
        </div>
      </div>
    </template>
  </pane>
</div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Pane from '@/components/Pane'

let anneesPassees = [
  {
    annee: 2017,
    text: '<h2>2017 : Le Caprice des Jeux</h2>' +
          '<p>Grèce Antique, vous avez dit ? Nous irons donc y rencontrer Pélops et sa mère, deux modestes gens vivant paisiblement grâce à leur troupeau de moutons.</p>' +
          '<p>Au grand désespoir de sa mère persuadée que son fils peut accomplir de grandes choses, Pélops se satisfait de sa position, sans véritable ambition. Elle aura beau le sermonner, Pélops reviendra toujours à ses moutons. Cependant, surplombant la Grèce depuis le Mont Olympe, les Dieux, eux, ne font pas la sourde oreille.</p>' +
          '<p>Quel destin réservent-ils à Pélops ?</p>',
    bgImage: '/images/equipes/equipe--2017.jpg',
    image: '/images/affiches/affiche--2017.jpg',
    gallerie: true,
    equipe: true
  },
  {
    annee: 2016,
    text: '<h2>2016 : Les Fruits de la Passion</h2>' +
          '<p>Voyagez dans une Espagne morcelée où la Renaissance n’en est encore qu’à ses prémices... A cette époque où les guerres de territoires sont encore monnaie courante, le duché de la Rioja, l\'un des plus important duché d\'Espagne, vit des moments difficiles : les finances du royaume sont au plus mal et les tensions avec les royaumes voisins de Castille et d\'Aragon sont palpables...</p>' +
          '<p>Comment la situation a-t-elle pu dégénérer à ce point ? La gestion calamiteuse et frivole du Duc de la Rioja y est certainement pour quelque chose ! Ce joyeux luron a une fâcheuse tendance à privilégier les bals décadents et les danses folâtres aux problèmes géopolitiques...</p>' +
          '<p>Son entourage va-t-il enfin se décider à réagir ?</p>',
    bgImage: '/images/equipes/equipe--2016.jpg',
    image: '/images/affiches/affiche--2016.jpg',
    gallerie: false,
    equipe: true
  },
  {
    annee: 2015,
    text: '<h2>2015 : Ad Vitam Aeternam</h2>' +
          '<p>Une sacrée histoire de bonnes soeurs et de moines qui chaussent leurs sandales pour échapper à leur quotidien.</p>',
    bgImage: '/images/equipes/equipe--2015.jpg',
    image: '/images/affiches/affiche--2015.jpg',
    gallerie: false,
    equipe: false
  },
  {
    annee: 2014,
    text: '<h2>2014 : Broadway To Hell</h2>' +
          '<p>John Wise, icône du cinéma muet, fait parler de lui sur le plateau de la série Coeur d\'amour, théâtre de la rivalité entre ses deux anciens élèves, Daniel et Natacha.</p>' +
          '<p>Sous les yeux d\'un producteur aussi despotique qu\'incompétent et de son stagiaire préposé au café, tous deux escaladent les feux de la rampe, jusqu\'à l\'arrivée de Cunégonde Wise, la fille de John Wise.</p>',
    bgImage: '/images/equipes/equipe--2014.jpg',
    image: '/images/affiches/affiche--2014.jpg',
    gallerie: false,
    equipe: true
  },
  {
    annee: 2013,
    text: '<h2>2013 : Mange-Moi Si Tu Peux !</h2>' +
          '<p>Alors que le plus grand magnat du bonbon vient de succomber à un terrible accident de vélo, ses deux fils Antoine et Pierre que tout oppose se rerouvent forcés de diriger ensemble l\'entreprise familiale.</p>' +
          '<p>Cela sous le regard de la fatale Laure, de l\'inventeur fou Gaston et de la sévère secrétaire de son père.</p>',
    bgImage: '/images/equipes/equipe--2013.jpg',
    image: '/images/affiches/affiche--2013.jpg',
    gallerie: false,
    equipe: false
  },
  {
    annee: 2012,
    text: '<h2>2012 : Des Loups Dans La Bergerie</h2>' +
          '<p>Deux bourgeois de la ville débarquent dans le village de Patagnac et sèment le trouble dans cette paisible communauté d\'éleveurs de moutons.</p>' +
          '<p>Une enquête romantico-politique dans laquelle les masques tombent et les passions se déchaînent.</p>',
    bgImage: '/images/equipes/2012.jpg',
    image: '/images/affiches/affiche--2012.jpg',
    gallerie: false,
    equipe: false
  },
  {
    annee: 2011,
    text: '<h2>2011 : Le Destin Animé de Mr Swyt</h2>' +
          '<p>Pour sa 10ème édition la Commuz\' vous emmène à Hollywood... Artiste incompris ou réalisateur de génie, qui est réellement Mr Swyt ?</p>' +
          '<p>Goûtant aux jeux d\'un monde de paillettes, saura-t-il déjouer les pièges tendus par la diabolique Miss Devil sans se brûler les ailes ?</p>',
    bgImage: '/images/equipes/2011.jpg',
    image: '/images/affiches/affiche--2011.jpg',
    gallerie: false,
    equipe: false
  },
  {
    annee: 2010,
    text: '<h2>2010 : Humour, Gouache et Beauté</h2>' +
          '<p>La pièce retrace l’histoire (véritable) de nos plus grands peintres de la Renaissance : Raphaël, Léonard, Vitruve, et Michel et Ange, les siamois.</p>',
    bgImage: '/images/equipes/equipe--2010.jpg',
    image: '/images/affiches/affiche--2010.jpg',
    gallerie: false,
    equipe: false
  },
  {
    annee: 2009,
    text: '<h2>2009 : Bons Baisers de l\'Olympe</h2>' +
          '<p>Quand il apprend les dernières frasques de son fils Junior, Zeus l\'envoie en périple sur Terre pour qu\'il lui prouve qu\'il est apte à devenir un vrai dieu : il a une journée pour se trouver une femme.</p>' +
          '<p>Les rencontres s\'enchaînent, heureuses, malheureuses, souvent tumultueuses, sous les yeux attentifs de Dora, une déesse rivale de Dieu, et de son fils, Marcus, qui feront tout pour l\'empêcher d\'accomplir sa mission...</p>',
    bgImage: '/images/equipes/2009.jpg',
    image: '/images/affiches/affiche--2009.jpg',
    gallerie: false,
    equipe: false
  },
  {
    annee: 2008,
    text: '<h2>2008 : Profession : Détective</h2>' +
          '<p>La nuit s\'est achevée. Désormais les korrigans dansent, dansent autour du feu. Mais leurs victimes ne seront pas au rendez-vous... Non, ce soir, quelqu\'un d\'autre s\'en chargera : un étrange évènement menace la vie tranquille d\'un manoir des plus éclectiques de la Bretagne profonde.</p>' +
          '<p>Les rideaux s\'ouvrent, les personnages s\'affrontent, se méfient, s\'aiment, se détestent... Les quiproquos naissent, se mêlent pour concocter une potion efficace contre les idées les plus noires. Tandis que les émotions se succèdent au gré des situations, les indices apparaissent et disparaissent sous les yeux des spectateurs. Serez-vous aussi perspicace que notre détective pour percer le mystère ?</p>',
    bgImage: '/images/equipes/2008.jpg',
    image: '/images/affiches/affiche--2008.jpg',
    gallerie: false,
    equipe: false
  },
  {
    annee: 2007,
    text: '<h2>2007 : Opération Redfish</h2>' +
          '<p>Il existe un objet précieux, véritable Saint Graal des temps modernes, mais qui n\'a de vraie valeur que si les deux parties qui le composent sont réunies.</p>' +
          '<p>La première vient d\'être dérobée mais la seconde a disparu depuis des temps immémoriaux. Afin de protéger cette dernière, deux experts décident de partir à sa recherche.</p>',
    bgImage: '/images/equipes/2007.jpg',
    image: '/images/affiches/affiche--2007.jpg',
    gallerie: false,
    equipe: false
  },
  {
    annee: 2006,
    text: '<h2>2006 : La Surprise du Chef</h2>' +
          '<p>Cette année, la pièce sera une satire, humoristique mais pertinente, du monde de la politique. Le spectateur se verra plonger pendant plus d\'une heure et demie dans une aventure rocambolesque.</p>' +
          '<p>Un chef qui plaque tout du jour au lendemain... voilà qui donne une bien mauvaise image dans le milieu de la politique. Pour rester crédible, les quatre membres qui restent n’ont qu’une seule solution: être unis, et essayer de cacher l’affaire aux médias. Mais la réalité est d’un tout autre ton !</p>',
    bgImage: '/images/equipes/2006.jpg',
    image: '/images/affiches/affiche--2006.jpg',
    gallerie: false,
    equipe: false
  },
  {
    annee: 2005,
    text: '<h2>2005 : Derrière le Miroir</h2>' +
          '<p>6 personnes, que rien ne semble relier entre elles, se retrouvent dans un lieu étrange... Durant leur attente, des relations se nouent, les passés et les cœurs se dévoilent. Mais au fait, qu\'attendent-elles ainsi ? Et quel est cet étrange « administrateur » qui apparaît de temps à autre et semble détenir toutes les réponses sans jamais rien révéler ?</p>' +
          '<p>Dans ce lieu où le temps semble ne plus exister, sous le regard cynique de l’administrateur, ces 6 personnes vont apprendre à voir leur vie sous un éclairage différent, à la lumière de l\'histoire et du regard des 5 autres. Ne pas savoir pourquoi ni pour combien de temps elles sont ensemble les pousse à découvrir leurs sentiments, leurs envies, et à se parler sans se préoccuper des apparences.',
    bgImage: '/images/equipes/equipe--2005.jpg',
    image: '/images/affiches/affiche--2005.jpg',
    gallerie: false,
    equipe: false
  },
  {
    annee: 2004,
    text: '<h2>2004 : La Danse des Girafes</h2>' +
          '<p>8 amis réunis, leur passé sur la table, leur présent avec eux et leur futur en question se retrouvent, mais qu\'ont t\'ils encore en commun, que pensent-ils réellement des uns et des autres, d\'eux-mêmes ? Quelles conséquences sur leur propre vie ces retrouvailles vont-elles avoir ?</p>' +
          '<p>C\'est dans cette ambiance à la fois introspective et sociale qu\'évolue le spectacle de la Commuz\' 2004, plongé dans l\'onirisme et la dure réalité des rapports humains, mais où les scènes peuvent être drôles et graves à la fois car c\'est ainsi que sont nos liens quand on est une grande bande d\'amis aux caractères aussi diverses et parfois incompatibles que possible.</p>' +
          '<p>Parfois, c\'est la jungle.</p>',
    bgImage: '/images/equipes/equipe--2004.jpg',
    image: '/images/affiches/affiche--2004.jpg',
    gallerie: false,
    equipe: false
  },
  {
    annee: 2003,
    text: '<h2>2003 : T.V. Paillettes Show</h2>' +
          '<p>Un temps que les moins de 20 ans ne peuvent pas connaître.</p>',
    bgImage: '',
    image: '/images/affiches/affiche--2003.jpg',
    gallerie: false,
    equipe: false
  },
  {
    annee: 2002,
    text: '<h2>2002 : Voyage au bout de la rue</h2>' +
          '<p>Un temps que les moins de 20 ans ne peuvent pas connaître.</p>',
    bgImage: '',
    image: '/images/affiches/affiche--2002.jpg',
    gallerie: false,
    equipe: false
  }
]

export default {
  components: { Navbar, Pane },
  data: function () {
    return { anneesPassees }
  }
}
</script>

<style lang="scss" scoped>
#spectacle__hero {
  color: white;
  // min-height: 70vh;
  height: 60vh;
  display: grid;
  grid-template-columns: 100%;
  align-items: center;
  justify-items: center;
  margin-bottom: 2em;
}

#spectacle__hero_bg {
  grid-area: 1 / 1 / -1 / -1;
  z-index: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

#spectacle__presentation {
  width: 100%;
  text-align: center;
  padding: 2rem;
  @media only screen and (min-width: 768px) {
    padding: 4rem;
  }
  // background: linear-gradient(100deg, #621837, #47193b 60%);
  background: linear-gradient(25deg, #B24592 0%, #c84c62 100%);
  h2 {
    margin-bottom: 0.5em;
  }

  a {
    color: var(--light-pink);
    font-size: 1.2em;
  }
}

#precedentes {
  padding: 5rem;
  color: white;

  a {
    color: #9b9b9b;

    &:not(:last-child) {
      margin-right: 1ch;

      &::after {
        content: ",";
      }
    }
  }
}

.annee__links {
  display: flex;
  flex-direction: row;
}

.button-link {
  margin-top: 1em;
}
</style>
