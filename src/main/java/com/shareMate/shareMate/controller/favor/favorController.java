package com.shareMate.shareMate.controller.favor;

import com.shareMate.shareMate.dto.FavorDto;
import com.shareMate.shareMate.dto.ReqFavorDto;
import com.shareMate.shareMate.dto.response.Response;
import com.shareMate.shareMate.service.FavorService;
import io.swagger.annotations.ApiOperation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequiredArgsConstructor
@Tag(name="",description = "")

public class favorController {
    private FavorService favorService;


    @PostMapping("/favor")
    @ApiOperation(value = "개인 취향 입력",notes = "자기소개에 관한 정보를 입력받습니다.",tags="User")

    private ResponseEntity addFavor(HttpServletRequest request, @RequestBody ReqFavorDto favorDto){
        final int user_id =Integer.parseInt(request.getAttribute("userid").toString());
        favorService.doInsert(user_id, favorDto);
        return ResponseEntity.status(HttpStatus.OK).body("success");
    }
    @PutMapping("/favor")
    @ApiOperation(value = "개인 취향 수정",notes = "자기소개에 관한 정보를 수정합니다.",tags="User")
    private ResponseEntity editFavor (HttpServletRequest request ,@RequestBody FavorDto favorDto){
        final int user_id =Integer.parseInt(request.getAttribute("userid").toString());
        favorService.doUpdate(user_id,favorDto);
        return ResponseEntity.status( HttpStatus.OK).body("success");
    }


}
