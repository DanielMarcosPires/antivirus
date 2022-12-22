const add = document.querySelector(".plan")

add.addEventListener('click',()=>{
    const terminal = document.querySelector(`.content div`)
    let nome = prompt('insira o nome')
    terminal.innerHTML= `
                  <section class="cardMoney">
                           <header class="cardMoney__header">
                               <h2 class="cardMoney__title">${nome}</h2>
                               <p class="cardMoney__paragraph">${pais.prompt('Qual o seu país')}</p>
                           </header>
                           <footer class="cardMoney__footer">
                               <p class="cardMoney__paragraph">
                                   2 <span>gb</span>/60min
                               </p>
                               <p class="cardMoney__paragraph">
                                   $00,00
                               </p>
                           </footer>
                    </section>
    `
})