
<template>
    <div>
        <ClientOnly>
            <FullCalendar :options="FullCalendar.options" />
        </ClientOnly>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
const { $fullCalendar } = useNuxtApp()
const FullCalendar = $fullCalendar


</script>

