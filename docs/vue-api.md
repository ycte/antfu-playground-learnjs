1. 模板引用 ref

  ```vue
  <script setup lang="ts">
  ...
  const kokomiref = ref({})
  onMounted(() => {
    console.log(kokomiref.value)
  })
  </script>
  <template>
    <div class="珊瑚宫">
      <!-- 能被加载 ref console.log {a}-->
      <!-- <KokomiState ref="kokomiref" /> -->
      <Starport port="kokomi" style="height: 200px; width: 200px">
        <!-- 实际上并没有实际加载这个组件 console.log {}-->
        <KokomiState :prop="a" style="height: 100px;" ref="kokomiref">
        </KokomiState >  
      </Starport>   
    </div>
  </template>

  ```

2. toRefs vs toRef

  ```ts
  // 当从组合式函数中返回响应式对象时，toRefs 相当有用。使用它，消费者组件可以解构/展开返回的对象而不会失去响应性：
  ```

3. customRef
4. TODO: effectScope
  