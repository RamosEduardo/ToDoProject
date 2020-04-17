import	Home	from	'./Home.vue'
import	Login	from	'./LogIn.vue'
import	Cadastro	from	'./Cadastro.vue'

export const	routes =	[
  {	path:	'/login',	component:	Login	},
  {	path:	'/cadastro',	component:	Cadastro	},
  {	path:	'/',	component:	Home	},
]
