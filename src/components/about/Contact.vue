<template>
    <div class="card text-dark bg-light mb3">
        <div class="card-header">联系我们</div>
        <div class="card-body">
            <h4 class="card-title">联系店长：</h4>
            <ul>
                <li><router-link :to="{name: 'personName'}">姓名</router-link></li>
                <li><router-link :to="{name: 'phoneNumber'}">电话</router-link></li>
            </ul>
            <router-view/>
        </div>
    </div>
</template>