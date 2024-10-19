"use strict";(self.webpackChunknew=self.webpackChunknew||[]).push([[747],{5747:(m,g,n)=>{n.r(g),n.d(g,{PagesModule:()=>f});var d=n(177),s=n(3536),t=n(8699),i=n(3783),l=n(7506);const u=[{path:"",component:(()=>{class e{constructor(r,c,o){this.shared=r,this.router=c,this.productsService=o,this.categories=[]}ngOnInit(){}getCategories(){this.productsService.getAllCategories().subscribe({next:r=>this.categories=r})}onFilter(r){this.shared.setFilterData(r),this.router.navigate(["/products"])}static{this.\u0275fac=function(c){return new(c||e)(t.rXU(i.d),t.rXU(s.Ix),t.rXU(l.g))}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["app-home"]],decls:34,vars:0,consts:[[1,"homepage"],[1,"hero-section"],[1,"container","text-center"],["routerLink","/products",1,"btn","btn-primary","btn-lg"],[1,"categories-section","py-5","bg-light"],[1,"container"],[1,"section-title","text-center"],[1,"row","text-center"],[1,"col-lg-3","col-md-6","mb-4"],[1,"category-card"],["src","../../../assets/travel-summer-accessories-blue-wood.jpg","alt","Category 1",1,"img-fluid","mb-3"],[1,"btn","btn-lg","btn-info",3,"click"],["src","../../../assets/ai-generated-8659741_640.jpg","alt","Category 2",1,"img-fluid","mb-3"],["src","../../../assets/pexels-solliefoto-298863.jpg","alt","Category 3",1,"img-fluid","mb-3"],["src","../../../assets/photo-1483985988355-763728e1935b.jpeg","alt","Category 4",1,"img-fluid","mb-3"]],template:function(c,o){1&c&&(t.j41(0,"div",0)(1,"section",1)(2,"div",2)(3,"h1"),t.EFF(4,"Welcome to ShopEase"),t.k0s(),t.j41(5,"p"),t.EFF(6,"Your one-stop destination for all your shopping needs"),t.k0s(),t.j41(7,"a",3),t.EFF(8,"Shop Now"),t.k0s()()(),t.j41(9,"section",4)(10,"div",5)(11,"h2",6),t.EFF(12,"Shop by Category"),t.k0s(),t.j41(13,"div",7)(14,"div",8)(15,"div",9),t.nrm(16,"img",10),t.j41(17,"button",11),t.bIt("click",function(){return o.onFilter(o.categories[0])}),t.EFF(18," Electronics "),t.k0s()()(),t.j41(19,"div",8)(20,"div",9),t.nrm(21,"img",12),t.j41(22,"button",11),t.bIt("click",function(){return o.onFilter(o.categories[1])}),t.EFF(23," Jewelery "),t.k0s()()(),t.j41(24,"div",8)(25,"div",9),t.nrm(26,"img",13),t.j41(27,"button",11),t.bIt("click",function(){return o.onFilter(o.categories[2])}),t.EFF(28," Men's Clothing "),t.k0s()()(),t.j41(29,"div",8)(30,"div",9),t.nrm(31,"img",14),t.j41(32,"button",11),t.bIt("click",function(){return o.onFilter(o.categories[3])}),t.EFF(33," Women's Clothing "),t.k0s()()()()()()())},dependencies:[s.Wk],styles:[".hero-section[_ngcontent-%COMP%]{background-image:url(cyber-monday-sale-shopping-cart-copy-space.3ba42965004f6021.jpg);background-size:cover;background-position:center center;color:#000;padding:200px 0;height:70vh}.hero-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3rem;margin-bottom:20px}.hero-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.25rem;margin-bottom:30px}.hero-section[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:10px 30px}.featured-products[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]{font-size:2rem;color:#007bff;margin-bottom:40px}.featured-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]{border:none}.featured-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:5px}.featured-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{padding:15px}.featured-products[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{margin-top:10px}.categories-section[_ngcontent-%COMP%]{background-color:#f9f9f9}.categories-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:40px;color:#007bff}.categories-section[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:5px}.categories-section[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin-top:10px;font-size:1.25rem}.cta-section[_ngcontent-%COMP%]{background-color:#343a40;color:#fff}.cta-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:20px}.cta-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.25rem;margin-bottom:30px}.cta-section[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:10px 30px}"]})}}return e})(),loadChildren:()=>n.e(998).then(n.bind(n,6998)).then(e=>e.HomeModule)},{path:"",loadChildren:()=>n.e(272).then(n.bind(n,6272)).then(e=>e.ProductsModule)}];let h=(()=>{class e{static{this.\u0275fac=function(c){return new(c||e)}}static{this.\u0275mod=t.$C({type:e})}static{this.\u0275inj=t.G2t({imports:[s.iI.forChild(u),s.iI]})}}return e})();var C=n(3887);let f=(()=>{class e{static{this.\u0275fac=function(c){return new(c||e)}}static{this.\u0275mod=t.$C({type:e})}static{this.\u0275inj=t.G2t({imports:[d.MD,h,C.G]})}}return e})()},7506:(m,g,n)=>{n.d(g,{g:()=>t});var d=n(8699),s=n(1626);let t=(()=>{class i{constructor(a){this.http=a}getAllCategories(){return this.http.get("https://fakestoreapi.com/products/categories")}getAllProducts(){return this.http.get("https://fakestoreapi.com/products")}getProductsByCategory(a){return this.http.get(`https://fakestoreapi.com/products/category/${a}`)}static{this.\u0275fac=function(u){return new(u||i)(d.KVO(s.Qq))}}static{this.\u0275prov=d.jDH({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})()},3783:(m,g,n)=>{n.d(g,{d:()=>s});var d=n(8699);let s=(()=>{class t{constructor(){this.category=""}setFilterData(l){this.category=l}getFilterData(){return this.category}clearFilterData(){this.category=""}static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275prov=d.jDH({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})()}}]);