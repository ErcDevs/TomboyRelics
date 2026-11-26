<!-- Full-screen photo viewer. Click/tap the photo to zoom in; move the mouse
     (or drag a finger) to look around. Arrows or swipe to change photos. -->
<template>
  <Teleport to="body">
    <div v-if="open" class="fixed inset-0 z-50 bg-black/95 flex items-center justify-center select-none" @click.self="close">
      <button @click="close" class="absolute top-4 right-4 text-white/80 hover:text-white text-4xl leading-none z-10" aria-label="Close">×</button>
      <button v-if="images.length > 1" @click.stop="step(-1)" class="absolute left-2 sm:left-6 text-white/70 hover:text-white text-5xl z-10 px-2" aria-label="Previous photo">‹</button>
      <button v-if="images.length > 1" @click.stop="step(1)" class="absolute right-2 sm:right-6 text-white/70 hover:text-white text-5xl z-10 px-2" aria-label="Next photo">›</button>

      <div
        ref="frame"
        class="relative w-full h-full flex items-center justify-center overflow-hidden"
        :class="zoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'"
        @click="toggleZoom"
        @mousemove="pan"
        @touchstart.passive="touchStart"
        @touchmove.prevent="touchMove"
        @touchend="touchEnd"
      >
        <img
          :src="images[index]"
          :alt="alt"
          draggable="false"
          class="max-w-[95vw] max-h-[90vh] object-contain transition-transform duration-200 ease-out"
          :style="{ transform: zoomed ? `scale(${SCALE})` : 'none', transformOrigin: origin }"
        />
      </div>

      <p class="absolute bottom-4 left-0 right-0 text-center text-sm text-white/60">
        {{ zoomed ? 'Move to look around · tap to zoom out' : 'Tap photo to zoom' }}
        <span v-if="images.length > 1"> · {{ index + 1 }} / {{ images.length }}</span>
      </p>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, watch, onBeforeUnmount } from 'vue'

const SCALE = 2.5
const props = defineProps({ images: { type: Array, required: true }, alt: { type: String, default: '' } })
const open = defineModel('open', { type: Boolean, default: false })
const index = defineModel('index', { type: Number, default: 0 })

const zoomed = ref(false)
const origin = ref('50% 50%')
const frame = ref(null)

function close() { open.value = false }
function step(d) {
  zoomed.value = false
  index.value = (index.value + d + props.images.length) % props.images.length
}
function setOrigin(x, y) {
  const r = frame.value.getBoundingClientRect()
  const px = Math.min(100, Math.max(0, ((x - r.left) / r.width) * 100))
  const py = Math.min(100, Math.max(0, ((y - r.top) / r.height) * 100))
  origin.value = `${px}% ${py}%`
}
function toggleZoom(e) {
  if (moved) return
  setOrigin(e.clientX, e.clientY)
  zoomed.value = !zoomed.value
}
function pan(e) { if (zoomed.value) setOrigin(e.clientX, e.clientY) }

// Touch: drag to pan when zoomed, swipe to change photo when not.
let startX = 0, startY = 0, moved = false
function touchStart(e) { const t = e.touches[0]; startX = t.clientX; startY = t.clientY; moved = false }
function touchMove(e) {
  const t = e.touches[0]
  if (Math.abs(t.clientX - startX) + Math.abs(t.clientY - startY) > 10) moved = true
  if (zoomed.value) setOrigin(t.clientX, t.clientY)
}
function touchEnd(e) {
  const dx = e.changedTouches[0].clientX - startX
  if (!zoomed.value && moved && Math.abs(dx) > 50 && props.images.length > 1) step(dx < 0 ? 1 : -1)
  setTimeout(() => (moved = false), 50)
}

function onKey(e) {
  if (!open.value) return
  if (e.key === 'Escape') close()
  if (e.key === 'ArrowRight') step(1)
  if (e.key === 'ArrowLeft') step(-1)
}
watch(open, (v) => {
  zoomed.value = false
  document.body.style.overflow = v ? 'hidden' : ''
  if (v) window.addEventListener('keydown', onKey)
  else window.removeEventListener('keydown', onKey)
})
onBeforeUnmount(() => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' })
</script>
