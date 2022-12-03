var data = [
    {img:'고양이.jpg',loc:'핑구펫(경기 분당구)'  ,title:'고양이 유치원-핑구펫' ,desc:'고양이 사랑해,고양이 유치원'}
   ,{img:'고양이2.jpg' ,loc:'피플앤펫(경기 분당구)' ,title:'고양이 유치원-피플앤펫'  ,desc:'고양이 좋아해,고양이 유치원'}
   ,{img:'강아지4.jpg' ,loc:'펫바버샵(경기 수정구)' ,title:'강아지 유치원-펫바버샵'  ,desc:'강아지는 냐옹,강아지 유치원'}
   ,{img:'강아지2.jpg' ,loc:'GOM 펫택시(제주 서귀포시)'  ,title:'강아지 유치원-GOM 펫택시' ,desc:'개껌천국! 강아지 유치원'}
   ,{img:'강아지.jpg' ,loc:'미림싸이(서울 관악구)' ,title:'고양이 유치원-2-3'  ,desc:'걍남스타일 양혜원,고양이 유치원'}
   ,{img:'고양이3.jpg' ,loc:'핑구펫(경기분당구)'  ,title:'고양이 유치원-핑구펫' ,desc:'고양이 사랑해,고양이 유치원'}
   ,{img:'고양이4.jpg' ,loc:'피플앤펫(경기 분당구)' ,title:'고양이 유치원-피플앤펫'  ,desc:'고양이 좋아해,고양이 유치원'}
   ,{img:'강아지5.jpg' ,loc:'펫바버샵(경기 수정구)' ,title:'강아지 유치원-펫바버샵'  ,desc:'강아지는 냐옹,강아지 유치원'}
   ,{img:'강아지3.jpg' ,loc:'GOM 펫택시(경기 분당구)'  ,title:'강아지 유치원-GOM 펫택시' ,desc:'개껌천국! 강아지 유치원'}
   ,{img:'고양이5.jpg' ,loc:'ㅎㅎ(서울 마포구)'  ,title:'강아지 유치원-ㅎ.ㅎ'  ,desc:'유림아 사랑해,강아지 유치원'}
   ];

const setData = function(opt,searchVal){
    console.log(opt, searchVal);
    let data_tmp=[];
    if(opt=='loc'){//체크박스클릭시
        if(!!searchVal){
            data_tmp = data.filter(i=>i.loc.indexOf(searchVal)>-1);
        }else{
            data_tmp=JSON.parse(JSON.stringify(data));
        }
    }else if(opt=='title'){//검색어 입력시
        $('input[type="checkbox"]').prop('checked',false);
        $('input[type="checkbox"][value=""]').prop('checked',true);
        if(!!searchVal){
            data_tmp = data.filter(i=>i.title.indexOf(searchVal)>-1)
        }else{
            data_tmp=JSON.parse(JSON.stringify(data));
        }
    }else{
        data_tmp=JSON.parse(JSON.stringify(data));
    }

    $('div.container3').empty();
    data_tmp.map(i=>{
        let html = '';
        html+='\n   <div class="pet">';
        html+='\n       <div class="img">';
        html+='\n           <img src="img/'+i.img+'" alt="">';
        html+='\n       </div>';
        html+='\n       <div class="text">';
        html+='\n           <p class="p1">'+i.loc+'<br/></p>';
        html+='\n           <p class="p2">'+i.title+'<br/></p>';
        html+='\n           <p class="p3">'+i.desc+'</p>';
        html+='\n       </div>';
        html+='\n   </div>'; 
        $('div.container3').append(html);     
    });
};


//$(function(){
$(document).ready(function(){
    setData();

    //검색 돋보기 클릭시
    $(document).on('click','.bx-search',function(){
        let searchVal = $('#searchBox').val().trim();

        setData('title',searchVal);
    });

    //체크박스 선택시
    $(document).on('click','#j1',function(){
        let val=$(this).val();
        $('input[type="checkbox"]').prop('checked',false);
        $('input[type="checkbox"][value="'+val+'"]').prop('checked',true);

        setData('loc',val);
    });
});


    

    