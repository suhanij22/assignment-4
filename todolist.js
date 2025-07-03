let todo=[];
        rendertodo();
        function rendertodo(){
            let todoHTML='';
            for(let i=0;i<todo.length;i++)
        {
            let show=todo[i];
            const workname=show.workname;
            const html=`<div><input type="checkbox" class="check">${workname}</div>
            <div><button class="delete" onclick="todo.splice(${i},1); rendertodo();">delete</button></div>`;
            todoHTML+=html;

        }
        console.log(todoHTML);
        document.querySelector('.text').innerHTML=todoHTML;
        }
        function add(){
            let name1=document.querySelector('.name');
            let work=name1.value;
            todo.push({
                workname:work
            });
            console.log(todo);
            name1.value='';
            rendertodo();
        }