<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="team-card">
    <div class="team-image-wrapper">
      <img :src="image" :alt="name" class="team-member-img">
    </div>
    <div class="team-info">
      <h3 class="team-member-name">{{ name }}</h3>
      <div class="team-member-role">{{ role }}</div>
    </div>
  </div>
</template>

<style scoped>
.team-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.team-image-wrapper {
  width: 100%;
  aspect-ratio: 4/5;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 24px;
  background-color: var(--gray-bg);
}

.team-member-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.33, 1, 0.68, 1), filter 0.6s ease;
  filter: grayscale(20%);
}

.team-card:hover .team-member-img {
  transform: scale(1.05);
  filter: grayscale(0%);
}

.team-member-name {
  font-size: 24px; /* Increased from 20px */
  margin-bottom: 10px;
  color: var(--black);
  font-weight: 600;
}

.team-member-role {
  color: var(--orange);
  font-size: 16px; /* Increased from 14px */
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
</style>
