import{a as u}from"./contracts.26f4e86f.js";import"./index.3758c5f4.js";import{t as r}from"./keplr.d68446dd.js";async function x(s,o,n,c){const l={get_lb_pair_information:{token_a:o,token_b:n,bin_step:c}},d=await s.query.compute.queryContract({contract_address:u.address,code_hash:u.code_hash,query:l});return console.log(JSON.stringify(d)),d}async function h(s,o,n,c,l,d,a,e){const m={add_liquidity:{liquidity_parameters:{token_x:l,token_y:d,bin_step:c,amount_x:a.toFixed(0),amount_y:e.toFixed(0),amount_x_min:(.95*a).toFixed(0),amount_y_min:(.95*e).toFixed(0),active_id_desired:8388608,id_slippage:100,delta_ids:[-5,-4,-3,-2,-1,0,1,2,3,4,5],distribution_x:[0,0,0,0,0,.090909,.181818,.181818,.181818,.181818,.181818].map(t=>t*1e18),distribution_y:[.181818,.181818,.181818,.181818,.181818,.090909,0,0,0,0,0].map(t=>t*1e18),deadline:999999999999999}}};try{const t=await s.tx.compute.executeContract({sender:s.address,contract_address:n,code_hash:o,msg:m,sent_funds:[]},{gasLimit:2e6});if(t.code===0){const g={message:`
        <h4>Transaction Success 🥳</h4>
        <details class="text-sm">
          <summary>Details</summary>
          <dl class="font-mono grid grid-cols-[5rem_minmax(0,_2fr)]">
            <dt class="opacity-50">Tx Hash:</dt>
            <a
              href="https://www.mintscan.io/secret/txs/${t.transactionHash}"
              target="_blank"
              rel="noreferrer"
              class="!dark:text-success-500 !text-success-800"
            >
              <dd>View on block explorer</dd>
            </a>
            <dt class="opacity-50">Gas Used:</dt>
            <dd>${t.gasUsed.toLocaleString()}</dd>
          </dl>
          </details>
        `,background:"variant-glass-surface ring-2 ring-inset dark:ring-success-700 ring-success-700",autohide:!1,classes:"-translate-y-4 font-semibold"};r.trigger(g)}else{console.log(t.rawLog);const g={message:`
				<h4>Transaction Failed</h4>
				<details class="text-sm">
					<summary>Details</summary>
					<dl class="font-mono grid grid-cols-[5rem_minmax(0,_2fr)]">
						<dt class="opacity-50">Raw Log:</dt>
						<dd>${t.rawLog}</dd>
					</dl>
				</details>
				`,background:"variant-glass-surface ring-2 ring-inset ring-error-500",autohide:!1,classes:"-translate-y-4 font-semibold"};r.trigger(g)}}catch(t){const g={message:`
			<h4>Something went wrong 🤔</h4>
			<details class="text-sm">
				<summary>Details</summary>
				<dl class="font-mono grid grid-cols-[5rem_minmax(0,_2fr)]">
					<dt class="opacity-50">Action:</dt>
					<dd>Execute</dd>
					<dt class="opacity-50">Message:</dt>
					<dd class="text-error-700 dark:text-error-500">${t.message}</dd>
				</dl>
			</details>
			`,background:"variant-glass-surface ring-2 ring-inset ring-secondary-500",autohide:!1,classes:"-translate-y-4 font-semibold"};r.trigger(g)}}async function p(s,o,n,c,l,d){const e={remove_liquidity:{remove_liquidity_params:{token_x:l,token_y:d,bin_step:c,amount_x_min:"950000",amount_y_min:"950000",amounts:["31869459388831189549983844374029232670507008000"],deadline:999999999999999,ids:[8388608]}}};try{const i=await s.tx.compute.executeContract({sender:s.address,contract_address:n,code_hash:o,msg:e,sent_funds:[]},{gasLimit:2e6});if(i.code===0){const m={message:`
        <h4>Transaction Success 🥳</h4>
        <details class="text-sm">
          <summary>Details</summary>
          <dl class="font-mono grid grid-cols-[5rem_minmax(0,_2fr)]">
            <dt class="opacity-50">Tx Hash:</dt>
            <a
              href="https://www.mintscan.io/secret/txs/${i.transactionHash}"
              target="_blank"
              rel="noreferrer"
              class="!dark:text-success-500 !text-success-800"
            >
              <dd>View on block explorer</dd>
            </a>
            <dt class="opacity-50">Gas Used:</dt>
            <dd>${i.gasUsed.toLocaleString()}</dd>
          </dl>
          </details>
        `,background:"variant-glass-surface ring-2 ring-inset dark:ring-success-700 ring-success-700",autohide:!1,classes:"-translate-y-4 font-semibold"};r.trigger(m)}else{console.log(i.rawLog);const m={message:`
				<h4>Transaction Failed</h4>
				<details class="text-sm">
					<summary>Details</summary>
					<dl class="font-mono grid grid-cols-[5rem_minmax(0,_2fr)]">
						<dt class="opacity-50">Raw Log:</dt>
						<dd>${i.rawLog}</dd>
					</dl>
				</details>
				`,background:"variant-glass-surface ring-2 ring-inset ring-error-500",autohide:!1,classes:"-translate-y-4 font-semibold"};r.trigger(m)}}catch(i){const m={message:`
			<h4>Something went wrong 🤔</h4>
			<details class="text-sm">
				<summary>Details</summary>
				<dl class="font-mono grid grid-cols-[5rem_minmax(0,_2fr)]">
					<dt class="opacity-50">Action:</dt>
					<dd>Execute</dd>
					<dt class="opacity-50">Message:</dt>
					<dd class="text-error-700 dark:text-error-500">${i.message}</dd>
				</dl>
			</details>
			`,background:"variant-glass-surface ring-2 ring-inset ring-secondary-500",autohide:!1,classes:"-translate-y-4 font-semibold"};r.trigger(m)}}async function w(s,o,n,c,l){const d={swap:{swap_for_y:l,to:s.address,amount_received:c}};try{const a=await s.tx.compute.executeContract({sender:s.address,contract_address:n,code_hash:o,msg:d,sent_funds:[]},{gasLimit:2e6});if(a.code===0){const e={message:`
        <h4>Transaction Success 🥳</h4>
        <details class="text-sm">
          <summary>Details</summary>
          <dl class="font-mono grid grid-cols-[5rem_minmax(0,_2fr)]">
            <dt class="opacity-50">Tx Hash:</dt>
            <a
              href="https://www.mintscan.io/secret/txs/${a.transactionHash}"
              target="_blank"
              rel="noreferrer"
              class="!dark:text-success-500 !text-success-800"
            >
              <dd>View on block explorer</dd>
            </a>
            <dt class="opacity-50">Gas Used:</dt>
            <dd>${a.gasUsed.toLocaleString()}</dd>
          </dl>
          </details>
        `,background:"variant-glass-surface ring-2 ring-inset dark:ring-success-700 ring-success-700",autohide:!1,classes:"-translate-y-4 font-semibold"};r.trigger(e)}else{console.log(a.rawLog);const e={message:`
				<h4>Transaction Failed</h4>
				<details class="text-sm">
					<summary>Details</summary>
					<dl class="font-mono grid grid-cols-[5rem_minmax(0,_2fr)]">
						<dt class="opacity-50">Raw Log:</dt>
						<dd>${a.rawLog}</dd>
					</dl>
				</details>
				`,background:"variant-glass-surface ring-2 ring-inset ring-error-500",autohide:!1,classes:"-translate-y-4 font-semibold"};r.trigger(e)}}catch(a){const e={message:`
			<h4>Something went wrong 🤔</h4>
			<details class="text-sm">
				<summary>Details</summary>
				<dl class="font-mono grid grid-cols-[5rem_minmax(0,_2fr)]">
					<dt class="opacity-50">Action:</dt>
					<dd>Execute</dd>
					<dt class="opacity-50">Message:</dt>
					<dd class="text-error-700 dark:text-error-500">${a.message}</dd>
				</dl>
			</details>
			`,background:"variant-glass-surface ring-2 ring-inset ring-secondary-500",autohide:!1,classes:"-translate-y-4 font-semibold"};r.trigger(e)}}export{p as a,w as b,h as e,x as q};
