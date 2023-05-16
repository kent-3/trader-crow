<script lang="ts">
  import { base } from "$app/paths";
  import { fly } from "svelte/transition";


</script>

<div in:fly="{{ x: 100, duration: 500 }}" class="container h-full mx-auto p-6 flex justify-center items-start first:pt-8">
    <div class="block xl:w-2/3 w-auto space-y-10">
      <h1 class="font-semibold">HackSecret Demo Instructions</h1>
      <div class="space-y-2">
        <h2>Create a Pool</h2>
        <p>
          Go to the <a href="{base}/pool" class="btn btn-sm px-1 py-0 variant-ghost-primary">Pool</a> page and click 
          <a href="{base}/pool/create" class="btn btn-sm px-1 py-0 variant-ghost-primary">Create New Pool</a>. 
          Check the console as you choose different options, 
          especially "Active Price" which is converted to the Active Bin ID.
          A pool has already been created using the default settings.
          Try changing the inputs to create a new pool.
        </p>
      </div>
      <div class="space-y-2">
        <h2>Add/Remove Liquidity</h2>
        <p>
          Go to the
          <a href="{base}/pool" class="btn btn-sm px-1 py-0 variant-ghost-primary">
            Pool
          </a>
          page and click on the 
          <a href="{base}/pool/example" class="btn btn-sm px-1 py-0 variant-ghost-primary">
            Example Pool
          </a>
          link. The pool has been created at a price of 1:1. The Liquidity Shape option isn't configured yet -
          see <code>/src/lib/contracts/lb_pair/execute.ts</code> for an example.
        </p>
      </div>
      <div class="space-y-2">
        <h2>Make a Trade</h2>
        <p>
          Go to the
          <a href="{base}/trade" class="btn btn-sm px-1 py-0 variant-ghost-primary">
            Trade
          </a> page. The UI isn't fully ready yet, but swaps work in both directions!
        </p>
      </div>
    </div>
</div>