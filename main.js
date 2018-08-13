
var Home = Vue.component('Home', {
	template:
		`
			<v-app>
				<v-content>
					<v-container>
						<h1>Home</h1>
					</v-container>
				</v-content>
			</v-app>
		`
});

var List = Vue.component('List', {
	template:
		`
			<v-app>
				<v-content>
					<v-flex ma-3>
						<v-data-table
							:headers="headers"
							:items="dataItems[0]"
							hide-actions
						>
							<template slot="items" slot-scope="props">
								<td>{{props.item.id}}</td>
								<td>{{props.item.name}}</td>
								<td>{{props.item.username}}</td>
								<td>{{props.item.email}}</td>
								<td>{{props.item.address.street}} {{props.item.address.suite}} {{props.item.address.city}} {{props.item.address.zipcode}} <br /><small><em>{{props.item.address.geo.lat}} {{props.item.address.geo.lng}}</em></small></td>
								<td>{{props.item.phone}}</td>
								<td>{{props.item.website}}</td>
								<td><strong>{{props.item.company.name}}</strong> <br /><small>{{props.item.company.catchPhrase}} <br /> <em>{{props.item.company.bs}}</em></small></td>
							</template>
						</v-data-table>
					</v-flex>
				</v-content>
			</v-app>
		`,
	data() {
		return {
			headers: [
				{
					text:'ID',
					align: 'center',
					value: 'id',
					sortable: false
				},
				{
					text:'Name',
					align: 'left',
					value: 'name',
					sortable: false
				},
				{
					text:'Username',
					align: 'left',
					value: 'username',
					sortable: false
				},
				{
					text:'Email',
					align: 'left',
					value: 'email',
					sortable: false
				},
				{
					text:'Address',
					align: 'left',
					value: 'address',
					sortable: false
				},
				{
					text:'Phone',
					align: 'left',
					value: 'phone',
					sortable: false
				},
				{
					text:'Website',
					align: 'left',
					value: 'website',
					sortable: false
				},
				{
					text:'Company',
					align: 'left',
					value: 'company',
					sortable: false
				}
			],
			dataItems: []
		}
	},
	created(){
		this.getData();
	},
	methods: {
		getData: function() {
			var vm = this;
			axios.get('https://jsonplaceholder.typicode.com/users')
			.then(function(response){
				var data = response.data;
				vm.dataItems.push(data);
			})
			.catch(function(error){
				console.log(error);
			});
		}
	}
});

var links = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/list',
		component: List
	}
];

var routerLink = new VueRouter({
	routes: links
});

var app = new Vue({
	el: '#app',
	router: routerLink,
	data: {
		welcome: 'Welcome'
	}
});