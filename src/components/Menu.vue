<template>
    <nav>
        <ul>
            <li><router-link to="/#about">Über mich</router-link></li>
            <li><router-link to="/#projects">Projekte</router-link></li>
            <li><router-link to="/#skills">Leistungen</router-link></li>
            <li><a class="button-link" href="mailto:info@westenthanner-design.com">Contact me</a></li>
        </ul>
        
    </nav>
</template>

<style scoped>

nav {
    padding: 4rem;
}

ul li {
    list-style-type: none;
    display: inline-block;
}

ul li:not(:last-child) {
    margin-right: 2rem;
}

ul li:not(:last-child)::after {
    padding-left: 0.5rem;
    content: '*/';
    opacity: 0.4;
}

a {
    text-decoration: none;
    color: black;
}

</style>