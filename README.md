# contract-editor-api

我現在有個問題就是我現在有個頁面編輯契約的，現在我要從資料庫中將已經儲存進去的特定問卷資料叫出來修改，然後更新存回資料庫，請問方法該怎麼寫
y xul4dj4hjp6z;4fu4m, 2k7API

這是編輯頁面的代碼:
<script>
import dataStore from "@/stores/dataStore";
import { mapState } from "pinia";
import { RouterLink } from 'vue-router';

export default {
    data() {
        return {
        }
    },
    computed: {
        // 綁定 Pinia 狀態
        // 'oneContractObj' 在 pinia 檔裡的 state
        ...mapState(dataStore, ['oneContractObj','roomObj','registerObj'])
    },
    components: {
        RouterLink 
    },
//    
}
</script>

<template>
    <div class="bigArea">
        <h1>與{{oneContractObj.tenantName}}的契約書</h1>
        <br>
        <div class="roomInfo">
            <h2>租賃物件資訊</h2>
            <br>
            <div class="rent_time">
            <label for="start_time">租賃期間 自：{{ oneContractObj.startDate }}</label>
            
            <label for="end_time">到：{{ oneContractObj.endDate }}</label>
        
            </div>
            <br>
            租賃物件地址: {{ roomObj.address }}
            <br>
            樓層: {{ roomObj.floor }}
            <br>
            房號: {{ roomObj.roomId }}
            <br>
            租金/月: {{ roomObj.rentP}}
            <br>
            押金: {{ roomObj.deposit }}
            <br>
            管理費/月: {{roomObj.manageP}}
            <br>
            電費/度: {{roomObj.eletricP}}
            <br>
            水費/月: {{ roomObj.waterP}}
            <br>
            面積: {{roomObj.acreage}}
            <br>
            設備:{{ roomObj.equip }}
            <br>
            物件備註:{{ roomObj.rOther }}
            <div class="input-wrapper">
        
            </div>
        </div>
        <br>
        <h2>立契約書人</h2>
        <div class="Info">
            <br>
            <h4>出租人姓名:{{registerObj.ownerName}}</h4> 
            <br>
            身分證字號: {{registerObj.ownerIdentity}}
            <br>
            戶籍地址: {{  oneContractObj.ownerHomeAddress}}
            <br>
            通訊地址: {{  oneContractObj.ownerContactAddress}}
            <br>
            連絡電話: {{ registerObj.ownerPhone}}
            <br>
            <br>
            <h4>承租人姓名:{{ oneContractObj.tenantName }}</h4> 
            <br>
            身分證字號: {{ oneContractObj.tenantIdentity}}
            <br>
            戶籍地址(營業登記地址): {{ oneContractObj.tenantHomeAddress}}
            <br>
            通訊地址: {{ oneContractObj.tenantContactAddress }}
            <br>
            email: {{ oneContractObj.tenantEmail }}
            <br>
            連絡電話: {{ oneContractObj.tenantPhone }}
        </div>
        <br>
        <h3>契約中止</h3>
        <div class="cut">
            <br>
            中止原因: <textarea name="cReason" id=""></textarea>
            <br>
            違約金: {{ roomObj.cutP }}
            <br>
            中止日期: <input type="date" id="start" style="font-size: 22px;" min="1970-01-01" max="2050-12-31" v-model="start_date"/>
        </div>
        <br>
        <h3>其他備註(或個別磋商條款)</h3>
        <br>
            <textarea disabled>{{oneContractObj.cOther }}</textarea>
        <div class="input-wrapper">
        
        </div>
        <br>
        <h3>立約日期:{{ oneContractObj.signDate }}</h3>
    
    
        <div class="btn"> 
        
        </div>
    </div>
</template>




<style scoped lang="scss">

.bigArea{
    margin-top: 3%;
    margin-left: 10%
}
</style>



## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with .

- Vite
- React
- shadcn-ui
- Tailwind CSS

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/contract-editor-api.git
cd contract-editor-api
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
