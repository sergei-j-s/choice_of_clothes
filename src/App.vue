<template>
    <div class="container">
        <div class="block top">
            <div class="items">
                <Items v-for="e in buildTL" :key="e.id" :item="e" @select="selectBL($event)" />
            </div>
            <div class="items">
                <Items v-for="e in buildTR" :key="e.id" :item="e" @select="selectBR($event)" />
            </div>
        </div>
        <div class="block bottom">
            <div class="items">
                <Items v-for="e in bl" :key="e.id" :item="e" @select="selectBL($event)" :class="{ active: tl.includes(e.id), lock: tl.length == 6 }" />
            </div>
            <div class="items">
                <Items v-for="e in br" :key="e.id" :item="e" @select="selectBR($event)" :class="{ active: tr.includes(e.id) }" />
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref, computed } from 'vue';
import Items from './components/Items.vue';

const tl = ref([]);
const tr = ref([]);

const bl = [
    {
        id: 1,
        name: 'Shoes 1'
    },
    {
        id: 2,
        name: 'Shoes 2'
    },
    {
        id: 3,
        name: 'Shoes 3'
    },
    {
        id: 4,
        name: 'Shoes 4'
    },
    {
        id: 5,
        name: 'T-shirt 1'
    },
    {
        id: 6,
        name: 'T-shirt 2'
    },
    {
        id: 7,
        name: 'T-shirt 3'
    },
    {
        id: 8,
        name: 'T-shirt 4'
    }
];

const br = [
    {
        id: 11,
        name: 'Jacket 1'
    },
    {
        id: 12,
        name: 'Jacket 2'
    },
    {
        id: 13,
        name: 'Jacket 3'
    },
    {
        id: 14,
        name: 'Jacket 4'
    },
    {
        id: 15,
        name: 'Hoodie 1'
    },
    {
        id: 16,
        name: 'Hoodie 2'
    },
    {
        id: 17,
        name: 'Hoodie 3'
    },
    {
        id: 18,
        name: 'Hoodie 4'
    }
];

const selectBL = (id) => {
    if (!tl.value.includes(id)) {
        if (tl.value.length < 6) {
            tl.value.push(id);
        };
    } else {
        let index = tl.value.indexOf(id);
        tl.value.splice(index, 1);
    };
};

const selectBR = (id) => {
    if (!tr.value.includes(id)) {
        tr.value = [id];
    } else {
        tr.value = [];
    };
};

const buildTL = computed(() => bl.filter(e => tl.value.includes(e.id)));
const buildTR = computed(() => br.filter(e => tr.value.includes(e.id)));
</script>

<style scoped>
.container {
    padding: 10px;
}

.block {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 10px;
}

.block.top {
    height: 200px;
    max-height: 200px;
}

.block.bottom {
    height: calc(100vh - 230px);
    margin-bottom: 0px;
}

.items {
    width: 100%;
    border: 1px solid #000;
    padding: 10px;
    overflow: auto;
}

.block.top>.items {
    max-width: 200px;
}

.item {
    padding: 10px;
    border: 1px solid #000;
    margin-bottom: 10px;
    cursor: pointer;
}

.item:hover:not(.lock) {
    border: 1px solid blue;
    background: #f3f3f3;
}

.active {
    border: 1px solid blue;
    background: #f3f3f3;
}

.lock:not(.active) {
    cursor: no-drop;
}
</style>
