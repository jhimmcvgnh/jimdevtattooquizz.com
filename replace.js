const fs = require('fs');
let c = fs.readFileSync('index.html', 'utf8');

const r = [
  ['Como seus clientes<br>marcam horário <span class="u-highlight">hoje</span>?', 'Como seus clientes<br>agendam uma sessão <span class="u-highlight">hoje</span>?'],
  ['<span class="cmd-answer__label">Aparecem direto na barbearia</span>', '<span class="cmd-answer__label">Aparecem direto no estúdio</span>'],
  ['Você sabia que <span class="u-highlight">68%</span> dos clientes desistem de marcar quando precisam esperar resposta?', 'Sabia que a maioria dos clientes de tatuagem pesquisa e decide agendar fora do horário comercial, quando ninguém está disponível para responder?'],
  ['escolhe o barbeiro, o serviço e o horário', 'escolhe o tatuador, o estilo e o horário disponível'],
  ['Boa! Vamos descobrir mais sobre como sua barbearia funciona hoje.', 'Boa! Vamos entender melhor como seu estúdio funciona hoje.'],
  ['<h2 data-cmd-question-title="" class="cmd-h1">Se alguém pesquisar<br>sua barbearia <span class="u-highlight">agora</span><br>no Google, o que aparece?</h2>', '<h2 data-cmd-question-title="" class="cmd-h1">Como novos clientes<br>conhecem o trabalho do<br>seu estúdio <span class="u-highlight">hoje</span>?</h2>'],
  ['<span class="cmd-answer__label">Meu site profissional</span>', '<span class="cmd-answer__label">Pelo Instagram</span>'],
  ['<span class="cmd-answer__label">Só meu Instagram</span>', '<span class="cmd-answer__label">Por indicação de outros clientes</span>'],
  ['<span class="cmd-answer__label">Provavelmente nada</span>', '<span class="cmd-answer__label">Pelo meu site com portfólio</span>'],
  ['<span class="u-highlight">9 em cada 10</span> pessoas pesquisam no Google antes de decidir confiar em um estabelecimento que não conhecem.', '<span class="u-highlight">9 em cada 10</span> pessoas pesquisam o portfólio online antes de agendar uma tatuagem. A decisão começa muito antes do primeiro contato.'],
  ['Instagram é vitrine. Site é endereço. Quando alguém pesquisa e não te encontra, vai direto pro <span class="u-highlight">concorrente</span>.', 'Instagram é vitrine. Site é autoridade. Quando alguém pesquisa no Google e não te encontra, vai direto para o <span class="u-highlight">concorrente</span> que aparece primeiro.'],
  ['O site que desenvolvo aparece no Google, tem página de serviços, fotos da equipe, avaliações de clientes e botão de agendamento direto, passando credibilidade real.', 'O site que desenvolvo tem portfólio organizado por estilo, página de cada tatuador, avaliações de clientes e agendamento direto, tudo do jeito que converte visitante em cliente.'],
  ['Você está cada vez mais perto de ver tudo isso funcionando de verdade.', 'Voce esta cada vez mais perto de ver tudo isso funcionando de verdade.'],
  ['Como você imagina<br>o site <span class="u-highlight">ideal</span><br>pra sua barbearia?', 'Como você imagina<br>o site <span class="u-highlight">ideal</span><br>para o seu estúdio?'],
  ['Moderno, com animações e identidade visual marcante', 'Visual impactante, com a identidade do estúdio e o portfólio em destaque'],
  ['Simples, só com as informações básicas', 'Simples, só com as informações básicas de contato'],
  ['Visitantes formam uma opinião sobre um site em menos de <span class="u-highlight">3 segundos</span>, e decidem ali se ficam ou saem.', 'O site de um estúdio de tatuagem é a primeira impressão que um cliente tem antes mesmo de entrar pela porta. Ele precisa transmitir o estilo e a qualidade do trabalho.'],
  ['cores, tipografia, animações e identidade visual alinhadas ao estilo da sua barbearia.', 'identidade visual, tipografia, paleta de cores e layout alinhados ao estilo do seu estúdio.'],
  ['E sim, dá pra ter um site moderno e bonito e ainda assim rápido. Design não precisa pesar.', 'E sim, dá para ter um site visualmente forte, com portfólio em destaque, e ainda assim rápido e profissional. Impacto e performance andam juntos.'],
  ['Boa escolha! Isso vai fazer toda a diferença no resultado final.', 'Otima escolha! Isso vai fazer toda a diferença na hora que o cliente acessar.'],
  ['<h2 data-cmd-question-title="" class="cmd-h1">Você consegue<br><span class="u-highlight">acompanhar</span> sua barbearia<br>quando está fora dela?</h2>', '<h2 data-cmd-question-title="" class="cmd-h1">Você consegue<br><span class="u-highlight">acompanhar</span> sua agenda de sessões<br>quando está fora do estúdio?</h2>'],
  ['<span class="cmd-answer__label">Preciso ligar pra saber o que está acontecendo</span>', '<span class="cmd-answer__label">Preciso checar no WhatsApp ou ligar para alguém</span>'],
  ['Donos de negócio que acompanham os números de perto tomam decisões <span class="u-highlight">muito mais rápido</span> quando algo precisa mudar.', 'Estúdios que gerenciam a agenda de forma profissional reduzem faltas e cancelamentos de última hora de forma significativa.'],
  ['uma área exclusiva sua com todos os agendamentos do dia, histórico de clientes e os serviços que mais rendem.', 'exclusivo: agenda de sessões por tatuador, histórico de clientes, controle de orçamentos e muito mais.'],
  ['Nada de planilha, caderninho ou grupo no WhatsApp.', 'Nada de depender de caderno, planilha ou grupo no WhatsApp para saber o que tem no dia.'],
  ['Estamos quase lá! Seu projeto está tomando forma.', 'Estamos quase la! Seu projeto está tomando forma.'],
  ['Se você pudesse escolher<br>como seus clientes<br>te encontram, qual seria<br>o cenário <span class="u-highlight">ideal</span>?', 'Se você pudesse escolher<br>como novos clientes<br>te encontram, qual seria<br>o cenário <span class="u-highlight">ideal</span>?'],
  ['Me acham no Google e já agendam direto pelo site', 'Me acham no Google, veem o portfólio e já agendam direto pelo site'],
  ['Só por indicação de amigos', 'Só por indicação de outros clientes'],
  ['Negócios bem posicionados no Google recebem <span class="u-highlight">clientes novos</span> todos os dias, mesmo sem pedir indicação pra ninguém.', 'Clientes que chegam pelo Google já viram o seu trabalho e chegam decididos. A taxa de conversão e muito maior do que qualquer outro canal.'],
  ['Site profissional, sistema de agendamento e painel administrativo, tudo junto, do zero, pensado pra sua barbearia.', 'Site profissional com portfólio, sistema de agendamento e painel administrativo, tudo junto, do zero, pensado para o seu estúdio.'],
  ['Só mais um pouco! Vale muito a pena continuar até o final.', 'So mais um pouco! Vale muito a pena continuar ate o final.'],
  ['Você sabe quais clientes<br><span class="u-highlight">não voltam</span> há mais<br>de 30 dias?', 'Você sabe quais clientes<br>têm tatuagens em andamento<br>ou planejadas, mas <span class="u-highlight">não voltaram</span><br>para finalizar?'],
  ['Tenho uma noção, mas não rastreio', 'Tenho uma ideia, mas não rastreio'],
  ['Reconquistar um cliente que já te conhece custa <span class="u-highlight">muito menos</span> do que conquistar um cliente novo.', 'Clientes com tatuagens em andamento têm muito mais chance de voltar se receberem um contato no momento certo.'],
  ['Com o sistema que entrego, você vê exatamente quando cada cliente veio pela última vez, e pode agir antes de perdê-lo de vez: mandar <span class="u-highlight">lembrete</span>, oferecer algo, trazer ele de volta.', 'Com o sistema que entrego, você vê exatamente quando cada cliente veio pela última vez, qual tatuador atendeu e o que ficou planejado. Isso significa que você pode agir no momento certo: mandar uma mensagem, retomar o projeto, fechar a sessão que ficou pendente.'],
  ['Show! Já não falta quase nada.', 'Show! Ja nao falta quase nada.'],
  ['O R$ 898 é só o começo de um sistema que evolui com você.', 'O R$ 898 é só o começo de um sistema que evolui com o seu estúdio.'],
  ['sempre que precisar mexer em algo.', 'sempre que precisar adicionar um tatuador, atualizar o portfólio ou mudar qualquer coisa.'],
  ['Ganha um parceiro pro seu negócio crescer.', 'Ganha um parceiro para o seu estúdio crescer.'],
  ['agendamento, painel, lembretes, tudo.', 'portfólio, agendamento, painel, tudo.']
];

for(let p of r) {
  if(c.includes(p[0])) {
    c = c.replace(p[0], p[1]);
    console.log("Replaced:", p[0].substring(0, 30) + '...');
  } else {
    console.log("Not found:", p[0]);
  }
}
fs.writeFileSync('index.html', c, 'utf8');
console.log('Done');
