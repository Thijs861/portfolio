<script setup>
    import { ref, onMounted, onBeforeUnmount } from 'vue'

    // Make custom properties for our template.
    const props = defineProps({
        phrases: {
            type: Array,
            required: true
        },
        period: {
            type: Number,
            default: 2000
        }
    })

    // Use ref() to update values in a reactive way.
    const text = ref('') // Check if text is being typed or deleted.
    const isDeleting = ref(false) // Check if we are typing or deleting.
    const loopIndex = ref(0) // Check the word we are on.

    let timeoutId = null 

    function tick() {
        const i = loopIndex.value % props.phrases.length
        const fullTxt = props.phrases[i]

        // Typing/deleting logic.
        if (isDeleting.value) {
            text.value = fullTxt.substring(0, text.value.length - 1)
        } else {
            text.value = fullTxt.substring(0, text.value.length + 1)
        }

        let delay = 300 - Math.random() * 100 // Set a base delay with Math.random() to create a natural typing effect.
        if (isDeleting.value) delay /= 2 // Check if the component is currently deleting text. If it is deleting text, divide the timer by 2.

        // Pause when the word is completed.
        if (!isDeleting.value && text.value === fullTxt) {
            delay = props.period
            isDeleting.value = true
        } else if (isDeleting.value && text.value === '') {
            isDeleting.value = false
            loopIndex.value++
            delay = 500
        }

        // Call tick() function after delay timer ends.
        timeoutId = setTimeout(tick, delay)
    }

    // Start animations when component is rendered in DOM.
    onMounted(() => {
        tick()
    })

    // Stop animations when component is removed from the DOM to ensure no memory is wasted.
    onBeforeUnmount(() => {
        clearTimeout(timeoutId)
    })

</script>

<template>
    <span class="txt-rotate">
        <span class="wrap">{{ text }}</span>
        <span class="cursor">|</span>
    </span>
</template>

<style scoped>
.txt-rotate {
  display: inline-block;
}

.wrap {
  border: none;
}

.cursor {
  display: inline-block;
  width: 0.08em;
  animation: blink 0.8s infinite;
}

@keyframes blink {
  0%, 50%, 100% { opacity: 1; }
  25%, 75% { opacity: 0; }
}
</style>