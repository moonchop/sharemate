package com.shareMate.shareMate.controller.favor;

import com.shareMate.shareMate.dto.FavorDto;
import com.shareMate.shareMate.dto.ReqFavorDto;
import com.shareMate.shareMate.dto.response.Response;
import com.shareMate.shareMate.service.FavorService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@AllArgsConstructor
public class favorController {
    private FavorService favorService;


    @PostMapping("/favor")
    private ResponseEntity addFavor(HttpServletRequest request, @RequestBody ReqFavorDto favorDto){
        final int user_id =Integer.parseInt(request.getAttribute("userid").toString());
        favorService.doInsert(user_id, favorDto);
        return ResponseEntity.status(HttpStatus.OK).body("success");
    }
    @PutMapping("/favor")
    private ResponseEntity editFavor (HttpServletRequest request ,@RequestBody FavorDto favorDto){
        final int user_id =Integer.parseInt(request.getAttribute("userid").toString());
        favorService.doUpdate(user_id,favorDto);
        return ResponseEntity.status( HttpStatus.OK).body("success");
    }


}
