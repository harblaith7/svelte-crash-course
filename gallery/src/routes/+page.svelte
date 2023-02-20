<script lang="ts">
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import axios from "axios";
  let photos: {
    id: string;
    alt_description: string;
    urls: { regular: string };
  }[] = [];
  let term = "";

  const fetchData = async () => {
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?page=1&query=${
        term || "office"
      }&client_id=Fi_lnopUby3UWZSUbCF67CruQFpufn1-gRcsYFCT4Lk`
    );
    photos = response.data.results;
  };

  const handleClick = async () => {
    if (!term) return;

    await fetchData();
    term = "";
  };

  onMount(() => {
    fetchData();
  });
</script>

<div class="container">
  <div class="header">
    <h1>Image Gallery</h1>
    <div class="input-container">
      <input
        class="input"
        type="text"
        bind:value={term}
        placeholder="Type a category"
      />
      <button class="button" on:click={handleClick}>Search</button>
    </div>
  </div>
  <div class="photos">
    {#each photos as photo, i (photo.id)}
      <img
        src={photo.urls.regular}
        alt={photo.alt_description}
        class="image"
        in:fly={{ y: 200, duration: 2000, delay: i * 200 }}
        out:fade
      />
    {/each}
  </div>
</div>

<style>
  .image {
    width: 400px;
    height: 250px;
    margin: 5px;
  }

  .photos {
    display: flex;
    flex-wrap: wrap;
  }

  .container {
    width: 1230px;
    margin: 0 auto;
  }

  .header {
    text-align: center;
    font-size: 20px;
  }

  .input {
    padding: 10px;
    width: 400px;
    border-radius: 10px;
    outline: none;
    border: 1px solid gray;
    font-size: 20px;
  }

  .button {
    padding: 10px;
    font-size: 20px;
    background-color: aqua;
    border-radius: 10px;
    border: none;
    color: white;
  }

  .input-container {
    margin-bottom: 40px;
  }
</style>
