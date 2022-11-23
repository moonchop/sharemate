package com.shareMate.shareMate.service;


import com.shareMate.shareMate.dto.FavorDto;
import com.shareMate.shareMate.dto.ReqFavorDto;
import com.shareMate.shareMate.entity.FavorEntity;
import com.shareMate.shareMate.exception.UserNotFoundException;
import com.shareMate.shareMate.repository.FavorRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
@AllArgsConstructor
public class FavorService {

    private FavorRepository favorRepository;

    public void doInsert(int userid, ReqFavorDto reqFavorDto) {
        FavorEntity favor = new FavorEntity();
        favor.setUserID(userid);
        favor.setCleanness(reqFavorDto.getCleanness());
        favor.setMbti(reqFavorDto.getMbti());
        favor.setSmoking(reqFavorDto.getSmoking());
        favor.setDrinking(reqFavorDto.getDrinking());
        favor.setSelfIntro(reqFavorDto.getSelfIntro());
        favor.setSnoring(reqFavorDto.getSnoring());
        favor.setStudyTime(reqFavorDto.getStudyTime());
        favor.setWakeupTime(reqFavorDto.getWakeupTime());
        favor.setSleepTime(reqFavorDto.getSleepTime());
        favorRepository.save(favor);
    }
    public void doUpdate (int userid , FavorDto favorDto) {
        Optional<FavorEntity> f= favorRepository.findByUserID(userid);
        if (f.isPresent()){
            FavorEntity favor = new FavorEntity();
            favor.setUserID(userid);
            favor.setCleanness(favorDto.getCleanness());
            favor.setMbti(favorDto.getMbti());
            favor.setSmoking(favorDto.getSmoking());
            favor.setDrinking(favorDto.getDrinking());
            favor.setSelfIntro(favorDto.getSelfIntro());
            favor.setSnoring(favorDto.getSnoring());
            favor.setStudyTime(favorDto.getStudyTime());
            favor.setWakeupTime(favorDto.getWakeupTime());
            favor.setSleepTime(favorDto.getSleepTime());
            favorRepository.save(favor);
            return ;
        }
        else throw new ResponseStatusException(HttpStatus.NOT_FOUND, "USER NOT FOUND");

    }
}
