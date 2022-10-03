package com.shareMate.shareMate.controller;


import com.shareMate.shareMate.entity.CrudEntity;
import com.shareMate.shareMate.repository.CrudEntityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@RestController
@RequiredArgsConstructor
@RequestMapping("/test")
public class CrudController {

    @Autowired
    private final CrudEntityRepository crudEntityRepository;

    @PersistenceContext
    private EntityManager entityManager;

    @GetMapping("search")
    public String searchAllMember(){
        return crudEntityRepository.findAll().toString();
    }

    @PostMapping("insert")
    public String insertMember(@RequestParam(value="id") int id, @RequestParam(value="title") String title, @RequestParam(value="content") String content){
        if(crudEntityRepository.findById(id).isPresent()){
            return "동일한 id가 있습니다.";
        }
        else{
            CrudEntity entity = CrudEntity.builder().id(id).title(title).content(content).build();
            crudEntityRepository.save(entity);
            return "id : "+id+" title : "+title+" content : "+content + "로 추가되었습니다.";
        }
    }

    @GetMapping("update")
    public String updateMember(@RequestParam(value="id") int id, @RequestParam(value="title") String title){
        if(crudEntityRepository.findById(id).isEmpty()){
            return "입력한 "+id+"가 존재하지 않습니다.";
        }
        else{
            crudEntityRepository.save(CrudEntity.builder().id(id).title(title).build());
            return id+"의 타이틀을 "+title+"로 변경 완료";
        }
    }

    @GetMapping("delete")
    public String deleteMember(@RequestParam(value = "id") int id) {
        if(crudEntityRepository.findById(id).isEmpty()) { // 값 존재여부 확인
            return "입력한 " + id + "이 존재하지 않습니다";
        } else {
            crudEntityRepository.delete(CrudEntity.builder().id(id).build());
            return id + " 삭제 완료";
        }
    }
}
