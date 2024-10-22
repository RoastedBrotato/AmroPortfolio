<script>
  export let title = "";
  export let imageUrl = "";
</script>

<div class="relative w-full h-full overflow-hidden group">
  <div class="relative w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-102">
    <img 
      src={imageUrl} 
      alt={title} 
      class="w-full h-full object-cover"
    />
    <div class="absolute bottom-0 left-0 right-0 bg-black/70 p-4 transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
      <h3 class="text-white text-xl m-0">{title}</h3>
    </div>
  </div>
</div>