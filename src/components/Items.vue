<template>
    <div class="item" @click="$emit('select', item.id)">
        {{ item.name }}
    </div>
</template>
  
<script setup>
defineProps({
    item: Object
});

defineEmits(['select']);
</script>
