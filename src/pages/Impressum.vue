<template>
<main>
    <h2>Impressum</h2>
    <div class="content">
        <p>Angaben gemäß § 5 TMG </p><br>
        <p>Marianne Westenthanner <br>Westenthanner Design<br>Wendelsteinstraße 13<br>84419 Schwindegg </p>
        <h3>Kontakt </h3>
        <p>Telefon: 0160 2484281<br>E-Mail: info@westenthanner-design.com </p>

        <h3>EU-Streitschlichtung </h3>
        <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr . Unsere E-Mail-Adresse finden Sie oben im Impressum. </p>
        <h3>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h3>
        <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
        <h3>Haftung für Inhalte</h3>
        <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
        <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen. </p>
        <h3>Haftung für Links</h3>
        <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
        <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
        <h3>Urheberrecht</h3>
        <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
        <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen. </p>
        <p>Quelle: e-recht24.de</p>
    </div>
</main>
<Footer></Footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Footer from '../views/Footer.vue'

export default defineComponent({
  name: 'App',
  components: {
    Footer
  }
});
</script>

<style scoped>

main {
  top: 0;
  overflow-x: hidden;
  margin: 0 12rem 6rem 12rem;
}

h2 {
    margin-top: 14rem;
    margin-bottom: 3rem;
}

h3 {
    font-family: 'Roboto Mono', monospace;
    margin-bottom: 3rem;
    margin-top: 3rem;
}

p {
    line-height: 1.5em;
}

footer {
  background-color: var(--accent-dark);
}

</style>
