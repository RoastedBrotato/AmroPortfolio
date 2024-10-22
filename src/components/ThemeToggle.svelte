<script>
  import { onMount } from 'svelte';

  let theme;
  let isOpen = false;
  let toggleRef;

  onMount(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)")
      .matches ? "dark" : "light";
    theme = savedTheme || systemPreference;
    applyTheme(theme);

    const handleClickOutside = (event) => {
      if (toggleRef && !toggleRef.contains(event.target)) {
        isOpen = false;
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  function applyTheme(newTheme) {
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  function changeTheme(newTheme) {
    theme = newTheme;
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
    isOpen = false;
  }

  function getThemeIcon(themeType) {
    return themeType === "light" ? "🌞" : "🌙";
  }
</script>

<div class="relative" bind:this={toggleRef}>
  <div class="flex items-center">
    <button
      on:click={() => isOpen = !isOpen}
      class="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      aria-label="Toggle theme"
    >
      {getThemeIcon(theme)}
    </button>
    {#if isOpen}
      <div class="ml-2 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 flex">
        {#each ["light", "dark"] as themeOption}
          <button
            on:click={() => changeTheme(themeOption)}
            class="p-2 rounded-md {theme === themeOption ? 'bg-gray-100 dark:bg-gray-700' : ''} hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Switch to {themeOption} mode"
          >
            {getThemeIcon(themeOption)}
          </button>
        {/each}
      </div>
    {/if}
  </div>
</div>