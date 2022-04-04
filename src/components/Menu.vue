<template>
    <nav>
        <ul>
            <li><router-link to="#projects">Projekte</router-link></li>
            <li><router-link to="#skills">Leistungen</router-link></li>
            <li><a class="button-link" href="mailto:info@westenthanner-design.com">Contact me!</a></li>
        </ul>
        
    </nav>
</template>

<style scoped>

ul li {
    list-style-type: none;
    display: inline-block;
}

ul li:not(:last-child) {
    margin-right: 2rem;
}

</style>